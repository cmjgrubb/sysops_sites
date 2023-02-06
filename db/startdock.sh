#!/bin/bash

# Author: CMJ Grubb
# Date: 01/31/2023
# Description: This script creates a MongoDB Docker container with a persistent volume.

docker run --restart=always -d --network sysops_sites-network -p 27017:27017 --name sysops_sites-mongo -v mongo-data:/data/db mongo:latest