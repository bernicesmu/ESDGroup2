FROM python:3-slim
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN python -m pip install --no-cache-dir -r requirements.txt
COPY ./app.py .
EXPOSE 5105
CMD [ "python", "./app.py" ]