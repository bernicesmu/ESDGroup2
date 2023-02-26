from flask import Flask, request
import pika

app = Flask(__name__)

@app.route('/')
def index():
    # Create a connection to RabbitMQ
    hostname = 'mustang-01.rmq.cloudamqp.com'
    port = 5672
    virtual_host = 'zmclntbl'
    username = 'zmclntbl'
    password = 'ZpPr261W3iWCxoIy1IKCeINZGxK5pXAL'

    credentials = pika.PlainCredentials(username, password)
    parameters = pika.ConnectionParameters(hostname, port, virtual_host, credentials)

    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()

    # Send a message to the queue
    channel.basic_publish(exchange='ex_student',
                          routing_key='student.command.enroll',
                          body='Fuck you so much why can"t you just fcuking work?!')

    # Receive a message from the queue
    method_frame, header_frame, body = channel.basic_get(queue='q_student_command', auto_ack=True)
    if method_frame:
        print(f'Received message: {body.decode()}')

    # Close the connection
    connection.close()

    return 'Message sent and received successfully!'

if __name__ == '__main__':
    app.run(debug=True)