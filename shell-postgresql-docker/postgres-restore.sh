#!/bin/bash

pgb_filename=$1

if [ -z "$pgb_filename" ]; then
    printf "Argument: missing filename!\n"
    exit 1
fi

# rclone config
pgb_year=${pgb_filename:16:4}
pgb_month=${pgb_filename:20:2}

# rclone config, change this to your own
storage=s3pgbackup:pg-backups-74

master_host=IP_ADDRESS_OF_MASTER
docker_compose_dir=~/docker/postgres
restore_dir=/data/postgres

ssh_password=$SSH_PASSWROD

rclone copy --progress $storage/$pgb_year/$pgb_month/$pgb_filename \
    pgmaster:

if sshpass -p $ssh_password ssh -q $master_host [[ -f $pgb_filename ]] 
then
    printf "\nrclone: backup download from S3 successful!"
    printf "\n---------------------------------------------------\n"
else
    printf "\nrclone: backup download from S3 failed! (file not exist?)\n"
    exit 1
fi

sshpass -p $ssh_password \
    ssh feroz@$master_host \
    "cd $docker_compose_dir; sshpass -p $ssh_password sudo docker-compose stop postgresql-master"

if [ $? -eq 0 ]; then
    printf "\ndocker: stopping postgresql container successful!"
    printf "\n---------------------------------------------------\n"
else
    printf "\ndocker: stopping postgresql container failed!\n"
    exit 1
fi

sshpass -p $ssh_password \
    ssh feroz@$master_host \
    "sshpass -p $ssh_password sudo mv $restore_dir/data $restore_dir/data.bak; \
    sshpass -p $ssh_password sudo tar --same-owner -xf $pgb_filename -C $restore_dir; \
    sshpass -p $ssh_password sudo chown -R 1001 $restore_dir"

sshpass -p $ssh_password \
    ssh feroz@$master_host \
    "cd $docker_compose_dir; sshpass -p $ssh_password sudo docker-compose start postgresql-master"

if [ $? -eq 0 ]; then
    printf "\nRestore successful!"
    printf "\n---------------------------------------------------\n"
else
    printf "\nRestore failed!\n"
    exit 1
fi

sshpass -p $ssh_password \
    ssh feroz@$master_host \
    "sshpass -p $ssh_password sudo rm -rf $restore_dir/data.bak $pgb_filename"