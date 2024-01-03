#!/bin/bash
backuptype=$1

# rclone config, change this to your own
storage=s3pgbackup:pg-backups-74

# backup directories
backup_base_dir=/Postgres/Backup
pg_incremental_dir=/incremental
pg_compressed_dir=/compressed

# docker directories
docker_pg_backup_dir=/data/postgres
docker_compose_dir=~/docker/postgres

# rsync
bwlimit=50M
replica_host=IP_ADDRESS_OF_REPLICA
pgb_filename=postgres-backup-$(date +%Y%m%d-%H.%M.%S).tar.bz2 

ssh_password=$SSH_PASSWROD

# incremental backup
sshpass -p $ssh_password \
    rsync --delete -azv --info=progress2 --rsync-path="sudo rsync" \
    feroz@$replica_host:$docker_pg_backup_dir/ \
    $backup_base_dir$pg_incremental_dir

if [ $? -eq 0 ]; then
    printf "\nRsync: incremental backup of Postgresql successful!"
    printf "\n---------------------------------------------------\n"
else
    printf "\nRsync: incremental backup of Postgresql failed!\n"
    exit 1
fi

sshpass -p $ssh_password \
    ssh feroz@$replica_host \
    "cd $docker_compose_dir; sshpass -p $ssh_password sudo docker-compose stop postgresql-slave"

sshpass -p $ssh_password \
    rsync --checksum --delete -az -P --rsync-path="sudo rsync" \
    feroz@$replica_host:$docker_pg_backup_dir/ \
    $backup_base_dir$pg_incremental_dir

sshpass -p $ssh_password \
    ssh feroz@$replica_host \
    "cd $docker_compose_dir; sshpass -p $ssh_password sudo docker-compose start postgresql-slave"

if [ "$backuptype" == "incremental" ]; then
    printf "\nPostgresql: incremental backup complete!\n"
    exit
fi

# sudo will throw "no permission" error for my nfs setup
tar pjcf $backup_base_dir$pg_compressed_dir/$pgb_filename \
    -C $backup_base_dir$pg_incremental_dir data

rclone copy -v --progress --bwlimit $bwlimit \
    $backup_base_dir$pg_compressed_dir/$pgb_filename $storage/$(date +%Y)/$(date +%m)

#backup complete, remove .rar.bz7 from local
rm $backup_base_dir$pg_compressed_dir/$pgb_filename

printf "\nPostgresql: full backup complete!\n"