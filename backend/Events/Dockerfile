FROM python:3.11-slim
WORKDIR /usr/src/app
# RUN pip install --upgrade pip
# RUN apt-get -y install default-libmysqlclient-dev
# RUN apt-get update
# RUN apt-get install -y gcc
# RUN apt-get install -y default-libmysqlclient-dev
# ENV PYTHONBUFFERED 1
COPY . /usr/src/app
RUN  pip install --no-cache-dir -r requirements.txt
CMD [ "python", "manage.py", "runserver"]