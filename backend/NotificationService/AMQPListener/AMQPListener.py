import pika
import requests
import json
import os
import MySQLdb
from dotenv import load_dotenv

load_dotenv()
bot_token = os.getenv("BOT_TOKEN")
host_name = os.getenv("DB_NAME")
user = os.getenv("MYSQL_USER")
pw = os.getenv("MYSQL_PASSWORD")
db = os.getenv("MYSQL_DATABASE")

hostname = 'mustang-01.rmq.cloudamqp.com'
port = 5672
virtual_host = 'zmclntbl'
username = 'zmclntbl'
password = 'ZpPr261W3iWCxoIy1IKCeINZGxK5pXAL'

credentials = pika.PlainCredentials(username, password)
parameters = pika.ConnectionParameters(hostname, port, virtual_host, credentials)

# Create a connection to the RabbitMQ server
connection = pika.BlockingConnection(parameters)


# Create a channel on the connection
channel = connection.channel()

# Declare the queue to consume from
# queue_name = 'q_scis'
queue_name = 'q_notify'

# Define the callback function to handle incoming messages
def callback(ch, method, properties, body): # Body here should be the JSON 
    # Callback here will call send_reminder_telebot with parameters
    # print(f"Received message: {body}, type is {type(body)}")
    # Decode body
    bodyStr = body.decode("utf-8")
    bodyJson =json.loads(bodyStr)
    # jsonObj = {
    #     "matricNums":["132151", "0143892", "314dnsjvnaj"], # Look up db to get unique SID
    #     "message":str(body)
    #     # "message":"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
    # }
    send_reminder_telebot(bodyJson)

def getSid(matricNums:list) -> list: 
    try:
        conn_mysql = MySQLdb.connect(host=host_name,user=user,passwd=pw,database=db)
        cursor = conn_mysql.cursor()
        matricNums_str = ",".join(["'%s'" % matricNum for matricNum in matricNums])
        query = "SELECT telesid FROM telesession WHERE matricNum IN (%s)" % matricNums_str
        cursor.execute(query)
        results = cursor.fetchall()
        sids = [result[0] for result in results] if results else []
        return sids
    except Exception as error:
        print(f"Cause: {error}")
        return error

# Telegram bot send text
def send_reminder_telebot(data:dict)->None:
    chatIds = getSid(data["matricNums"]) # Converts matricNums to SIDS
    for id in chatIds:
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={id}&text={data['message']}"
        response = requests.get(url)
    # return response.json()
    return 


    
# # Start consuming messages from the queue
channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
# print('Waiting for messages...')
channel.start_consuming() 