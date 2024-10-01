#!/bin/bash

# Update and install necessary packages
sudo yum update -y
sudo yum install -y curl epel-release nginx

# Install nvm and Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Load nvm environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

# Install Node.js
nvm install 20.17.0

# Ensure global npm installs work correctly
npm install -g serve

# Check if Nginx installed successfully
if systemctl status nginx > /dev/null 2>&1; then
  echo "Nginx installation successful, proceeding with configuration..."

  # Copy Nginx configuration
  sudo cp -r /home/centos/nginx/conf.d /etc/nginx/

  # Set correct file permissions and SELinux context
  sudo chown -R nginx:nginx /home/centos/Desktop/dist
  sudo chcon -R -t httpd_sys_content_t /home/centos/Desktop/dist

  # Open HTTP port in firewall and reload the firewall
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --reload

  # Start and enable Nginx service
  sudo systemctl enable nginx
  sudo systemctl start nginx

  echo "Nginx configuration completed!"
else
  echo "Nginx installation failed. Skipping configuration steps."
fi

echo "Deployment completed!"
