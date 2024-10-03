#!/bin/bash

EXTRACT_DIR="/var/www/selfservice-app"
ARCHIVE_NAME="deployment_archive.tar.gz"

sudo mkdir -p $EXTRACT_DIR
sudo tar -xzvf $ARCHIVE_NAME -C $EXTRACT_DIR

# Update and install necessary packages
sudo yum install -y curl epel-release nginx

# Install nvm and Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Load nvm environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

# Install Node.js
nvm install 20.17.0

# Capturing last exit code
systemctl status nginx > /dev/null 2>&1
exit_code=$?

# Check if Nginx installed successfully

if [ $exit_code -eq 3 ]; then
  echo "Nginx installation successful, proceeding with configuration..."

  # Copy Nginx configuration
  sudo ln -sf $EXTRACT_DIR/nginx/conf.d/self-service.conf /etc/nginx/conf.d/self-service.conf

  # Start and enable Nginx service
  sudo systemctl enable nginx
  sudo systemctl start nginx

  echo "Nginx configuration completed!"
elif [ $exit_code -eq 0 ]; then
    echo "Nginx is running."
else
  echo "Nginx installation failed. Skipping configuration steps."
fi

echo "Deployment completed!"

