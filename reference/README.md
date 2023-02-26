# Base File
Inside this filet here are two main files, cloudAmqpSetup and ExStudentCommandListener.
___
## cloudAmqpSetup

Inside this file contains the code to setup an exchange and queue. Currently, we are using cloudamqp which is an online hosted AMQP exchange. The account is created by me, but with the login details inside the Python file you should still be able to create your own exchanges and queues. You will run into errors if you try to modify an existing queue. The blocks of code you can look at are below.

```
#Setting up an exchange
exchangename="ex_student"
exchangetype="topic"
channel.exchange_declare(exchange=exchangename, exchange_type=exchangetype, durable=True)

#Setting up Command Queue and binding queue
queue_name = "q_student_command"
channel.queue_declare(queue=queue_name, durable=True)
channel.queue_bind(exchange=exchangename, queue=queue_name, routing_key="student.command.#")
```

Naming conventions are general `ex_exchangename` and `q_exchangename_queuename` for exchange and queues.

___
## ExStudentCommandListener

This file can be ran via `python ExStudentCommandListener.py` Remember to do install requirements first. When ran, this file actively listens in the background for messages to AMQP. When there are any messages published to the routing key listened on, it will automatically print in console. 

Can modify this in order to process the information that comes in.
___
## FlaskPublishMessagesUI.py
This is a simple `Flask` application that allows you to test messages to send. You can test this with **Routing Key** `student.command.test` and **Exchange** `ex_student` and run it concurrently with the `StudentCommandListener` above.
This provides you an easier interface to test messages.