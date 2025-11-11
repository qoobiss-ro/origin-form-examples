#!/bin/sh
set -e

echo "Environment variable: ${ENVIRONMENT}"

#Check for the ENVIRONMENT variable and replace the file based on that
if [ ${ENVIRONMENT} = "STG" ]; then
   echo "Copying STG config..."
   cp /usr/share/nginx/html/config/app-config.stg.json /usr/share/nginx/html/app-config.json
elif [ ${ENVIRONMENT} = "prod" ]; then
   echo "Copying azure config..."
   cp /usr/share/nginx/html/config/app-config.prod.json /usr/share/nginx/html/app-config.json
else
   echo "Copying QA config..."
   cp /usr/share/nginx/html/config/app-config.qa.json /usr/share/nginx/html/app-config.json
fi

nginx -g 'daemon off;'
