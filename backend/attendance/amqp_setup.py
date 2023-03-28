# can delete this file but keeping it here for reference now
import pika
import json
from amqp_setup import channel, queue_name

""" hostname = "localhost" 
port = 5672 
connection = pika.BlockingConnection(
    pika.ConnectionParameters(
        host=hostname, port=port,
        heartbeat=3600, blocked_connection_timeout=3600,
)) """

hostname = 'mustang-01.rmq.cloudamqp.com'
port = 5672
virtual_host = 'zmclntbl'
username = 'zmclntbl'
password = 'ZpPr261W3iWCxoIy1IKCeINZGxK5pXAL'

credentials = pika.PlainCredentials(username, password)
parameters = pika.ConnectionParameters(hostname, port, virtual_host, credentials)

# Create a connection to the RabbitMQ server
connection = pika.BlockingConnection(parameters)


channel = connection.channel()
""" exchangename="broadcast_topic"
exchangetype="topic"
channel.exchange_declare(exchange=exchangename, exchange_type=exchangetype, durable=True)

queue_name = 'Notifications'
channel.queue_declare(queue=queue_name, durable=True) 

channel.queue_bind(exchange=exchangename, queue=queue_name, routing_key='#.notifications')  """

def check_setup():
    global connection, channel, hostname, port, exchangename, exchangetype

    if not is_connection_open(connection):
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=hostname, port=port, heartbeat=3600, blocked_connection_timeout=3600))
    if channel.is_closed:
        channel = connection.channel()
        channel.exchange_declare(exchange=exchangename, exchange_type=exchangetype, durable=True)


def is_connection_open(connection):
    try:
        connection.process_data_events()
        return True
    except pika.exceptions.AMQPError as e:
        print("AMQP Error:", e)
        print("...creating a new connection.")
        return False
