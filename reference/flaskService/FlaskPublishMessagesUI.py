from flask import Flask, render_template, request
import pika

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Get form data
    message = request.form['message']
    routing_key = request.form['routing_key']
    exchange = request.form['exchange']

    hostname = 'mustang-01.rmq.cloudamqp.com'
    port = 5672
    virtual_host = 'zmclntbl'
    username = 'zmclntbl'
    password = 'ZpPr261W3iWCxoIy1IKCeINZGxK5pXAL'
    # Connect to RabbitMQ
    credentials = pika.PlainCredentials(username, password)
    parameters = pika.ConnectionParameters(hostname, port, virtual_host, credentials)

    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()

    # Publish message
    channel.basic_publish(
        exchange=exchange,
        routing_key=routing_key,
        body=message
    )

    # Close connection
    connection.close()

    return "Message sent"

if __name__ == '__main__':
    app.run(debug=True)