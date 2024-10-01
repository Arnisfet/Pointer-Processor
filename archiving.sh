#!/bin/bash

# Define the directories to archive
FRONTEND_DIR="./Frontend/dist"
NGINX_DIR="./nginx"
ARCHIVE_NAME="deployment_archive.tar.gz"

# Check if the directories exist
if [ -d "$FRONTEND_DIR" ] && [ -d "$NGINX_DIR" ]; then
  echo "Creating tar archive from $FRONTEND_DIR and $NGINX_DIR..."

  # Create the tar archive
  tar -czvf $ARCHIVE_NAME $FRONTEND_DIR $NGINX_DIR

  echo "Archive $ARCHIVE_NAME created successfully!"
else
  echo "One or both directories do not exist. Archive creation failed."
fi
