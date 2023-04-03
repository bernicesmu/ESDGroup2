#!/bin/bash

# Apply database migrations
# python manage.py migrate

# Load initial data if database is empty
if [ -z "$(ls -A /var/lib/postgresql/data)" ]; then
    python manage.py loaddata initial_data.json
fi
