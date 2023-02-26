import pika
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
queue_name = 'q_student_command'

# Define the callback function to handle incoming messages
def callback(ch, method, properties, body):
    print("Received message: %r" % body)
    
# Start consuming messages from the queue
channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
print('Waiting for messages...')
channel.start_consuming()