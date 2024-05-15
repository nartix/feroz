# PostgreSQL Backup Script Documentation

This documentation provides an overview and usage instructions for the PostgreSQL backup script. The script is written in Bash and is used to perform incremental and full backups of a PostgreSQL database.

## Script Details

- **Script Name:** `postgres_backup.sh`

## Prerequisites

- PostgreSQL database running on an accessible replica host via SSH.
- Installation of `rsync` and `sshpass`.
- Availability of `docker-compose` command on both local and replica hosts if Docker is used.
- Configuration of `rclone` remote for storage destination.

## Script Configuration

Modify the following variables in the script according to your environment:

- `storage`: Destination storage location for backups (update to desired `rclone` remote configuration).
- `backup_base_dir`: Base directory for storing backups.
- `pg_incremental_dir`: Directory for incremental backups within `backup_base_dir`.
- `pg_compressed_dir`: Directory for compressed backups within `backup_base_dir`.
- `docker_pg_backup_dir`: Directory path on replica host for PostgreSQL data within Docker container.
- `docker_compose_dir`: Directory path on local host for Docker Compose files.
- `bwlimit`: Bandwidth limit for `rsync` during backup transfers.
- `replica_host`: IP address or hostname of the replica host where PostgreSQL runs.
- `ssh_password`: SSH password for connecting to the replica host (ensure secure setup or consider SSH key-based authentication).

## Script Usage

To use the script:

1.  Open a terminal or shell session.
2.  Navigate to the script directory.
3.  Make the script executable: `chmod +x postgres_backup.sh`.
4.  Execute the script with the desired backup type:

```bash
./postgres_backup.sh [backup_type]
```

Replace `[backup_type]` with:

- `incremental` for incremental backup.
- `full` for full backup.

**Note:** Ensure the executing user has necessary permissions and access rights (e.g., for `sudo` commands).

<br>

# PostgreSQL Database Restore Script Documentation

This documentation provides an overview and usage instructions for the Bash-bashed PostgreSQL restore script. It restores a PostgreSQL database from an S3 bucket backup file, utilizing rclone and sshpass commands. The script assumes a Docker container setup for the database.

## Script Details

- **Script Name:** `postgres_restore.sh`

## Prerequisites

- PostgreSQL database running in a Docker container
- Access to the S3 bucket containing the backup file
- `rclone` command installed and configured
- `sshpass` command installed

## Script Configuration

Before using the script, please configure the following variables:

- `pgb_filename`: The name of the backup file to restore.
- `storage`: The destination storage location for the backup file (e.g., S3 bucket).
- `master_host`: The IP address of the PostgreSQL database server.
- `docker_compose_dir`: The directory where the Docker Compose files are located.
- `restore_dir`: The directory on the server where the backup will be restored.
- `ssh_password`: The SSH password for accessing the server.

## Script Usage

To restore a PostgreSQL database using this script, run the following command:

```bash
./postgres-restore.sh <backup_file_name>
```

Replace `<backup_file_name>` with the name of the backup file to restore.

**Note:** Please ensure that you have the necessary permissions and configurations in place before running this script.
