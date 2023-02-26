try: 
    import pika
except Exception as e:
    print("Some Modules are missing {}").format_map(e)


# Set the connection parameters
hostname = 'mustang-01.rmq.cloudamqp.com'
port = 5672
virtual_host = 'zmclntbl'
username = 'zmclntbl'
password = 'ZpPr261W3iWCxoIy1IKCeINZGxK5pXAL'

credentials = pika.PlainCredentials(username, password)
parameters = pika.ConnectionParameters(hostname, port, virtual_host, credentials)

# Create a new connection
connection = pika.BlockingConnection(parameters)

# Setting up the channel
channel = connection.channel()

exchangename="ex_student"
exchangetype="topic"
channel.exchange_declare(exchange=exchangename, exchange_type=exchangetype, durable=True)

#Setting up Command Queue and binding queue
queue_name = "q_student_command"
channel.queue_declare(queue=queue_name, durable=True)
channel.queue_bind(exchange=exchangename, queue=queue_name, routing_key="student.command.#")

#Setting up Command Queue and binding queue
queue_name = "q_student_query"
channel.queue_declare(queue=queue_name, durable=True)
channel.queue_bind(exchange=exchangename, queue=queue_name, routing_key="student.query.#")

#Setting up Command Queue and binding queue
queue_name = "q_student_retry"
channel.queue_declare(queue=queue_name, durable=True)
channel.queue_bind(exchange=exchangename, queue=queue_name, routing_key="student.retry.#")

#Setting up Command Queue and binding queue
queue_name = "q_student_log"
channel.queue_declare(queue=queue_name, durable=True)
channel.queue_bind(exchange=exchangename, queue=queue_name, routing_key="student.log.#")


#Closing connection
connection.close()
"""
This function in this module sets up a connection and a channel to a local AMQP broker,
and declares a 'topic' exchange to be used by the microservices in the solution.
"""
def check_setup():
    # The shared connection and channel created when the module is imported may be expired, 
    # timed out, disconnected by the broker or a client;
    # - re-establish the connection/channel is they have been closed
    global connection, channel, hostname, port, exchangename, exchangetype

    if not is_connection_open(connection):
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=hostname, port=port, heartbeat=3600, blocked_connection_timeout=3600))
    if channel.is_closed:
        channel = connection.channel()
        channel.exchange_declare(exchange=exchangename, exchange_type=exchangetype, durable=True)


def is_connection_open(connection):
    # For a BlockingConnection in AMQP clients,
    # when an exception happens when an action is performed,
    # it likely indicates a broken connection.
    # So, the code below actively calls a method in the 'connection' to check if an exception happens
    try:
        connection.process_data_events()
        return True
    except pika.exceptions.AMQPError as e:
        print("AMQP Error:", e)
        print("...creating a new connection.")
        return False