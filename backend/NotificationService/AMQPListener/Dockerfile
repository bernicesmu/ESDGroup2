# Use an official Python runtime as a parent image
FROM python:3
# RUN apt-get update && apt-get install -y python3.9 python3.9-dev
# RUN apt-get update && apt-get install -y python3-pip

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY requirements.txt /app

RUN apt-get install -y default-libmysqlclient-dev

RUN  pip install --no-cache-dir -r requirements.txt

# RUN apt-get update && \
#     apt-get install -y libmysqlclient-dev
# Install any needed packages specified in requirements.txt
# (Note: you will need to create this file if you have any dependencies)
COPY . . 
ENV PATH="/usr/local/bin:$PATH"

# Run the command to start the AMQPListener script
CMD ["python3", "AMQPListener.py"]