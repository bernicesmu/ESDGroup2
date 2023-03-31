FROM python:3-slim
WORKDIR /usr/src/app
COPY requirements.txt .
COPY . .
RUN  pip install --no-cache-dir -r requirements.txt
EXPOSE 5107
CMD ["python", "getClubMembers.py"]