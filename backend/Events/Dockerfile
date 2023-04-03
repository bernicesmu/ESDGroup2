FROM python:3-slim
WORKDIR /usr/src/app
COPY . .
RUN  pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
# RUN python manage.py makemigrations
# RUN python manage.py migrate 
CMD [ "python", "manage.py", "runserver"]