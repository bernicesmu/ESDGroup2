FROM python:3.11-slim
WORKDIR /usr/src/app
COPY . .
COPY . /usr/src/app
RUN  pip install --no-cache-dir -r requirements.txt
CMD [ "python", "manage.py", "runserver"]