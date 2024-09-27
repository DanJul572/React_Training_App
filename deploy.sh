#!/bin/bash

# Pull the latest changes from the main branch
git pull origin main

# Install dependencies
yarn install

# Build the project
yarn build:dev

# Remove all files and folders inside /var/www/192.168.1.10
sudo rm -rf /var/www/192.168.1.10/*

# Copy all files and folders from dist to /var/www/192.168.1.10
sudo cp -r dist/* /var/www/192.168.1.10/

# Restart Nginx
sudo systemctl restart nginx
