# Use an official Python runtime as a parent image
FROM python:3
RUN echo "ServerName localhost"
# RUN apt-get update && apt-get install -y python3.9 python3.9-dev
# RUN apt-get update && apt-get install -y python3-pip

# Set the working directory to /app
WORKDIR /app
COPY requirements.txt /app

RUN apt-get install -y default-libmysqlclient-dev

# Copy the current directory contents into the container at /app
RUN pip install --no-cache-dir --upgrade pip \
  && pip install --no-cache-dir -r requirements.txt

COPY . /app
# Install any needed packages specified in requirements.txt
# (Note: you will need to create this file if you have any dependencies)
# Run the command to start the AMQPListener script
CMD ["python3", "ClumsyBot.py"]