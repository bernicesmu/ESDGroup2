from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
import pika
import os, sys
import requests
from invokes import invoke_http
import json
from os import environ

app = Flask(__name__)
CORS(app, supports_credentials=True)

studentURL = environ.get('studentURL')
attendanceURL = environ.get('attendanceURL')
# studentURL = "http://localhost:8080/student/"
# attendanceURL = "http://127.0.0.1:5105/"

@app.route("/uploadSignUp", methods=['POST'])
@cross_origin()
def uploadSignUp():
    file = request.files['file']
    eventId = request.form['eventId']
    if file:
        try: 
            print("\nReceived the sign up sheet file.")
            filename = os.path.splitext(file.filename)[0] 
            df = pd.read_excel(file)
            dfList = df.values.tolist()
            result = processUploadSignUps(dfList, filename, eventId)
            return jsonify(result), result["code"]
        
        except Exception as e: 
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            ex_str = str(e) + " at " + str(exc_type) + ": " + fname + ": line " + str(exc_tb.tb_lineno)
            print(ex_str)

            return jsonify({
                "code": 500,
                "message": "upload_signup.py internal error: " + ex_str
            }), 500
    
    return jsonify({
        "code": 400,
        "message": "Invalid file input: "
    }), 400
        

    # # Simple check of input format and data of the request are JSON
    # if request.is_json:
    #     try:
    #         signups = request.get_json()
    #         print("\nReceived the list of sign ups in JSON:", signups)

    #         # do the actual work
    #         # 1. Send order info {cart items}
    #         result = processUploadSignUps(signups)
    #         return jsonify(result), result["code"]

    #     except Exception as e:
    #         # Unexpected error in code
    #         exc_type, exc_obj, exc_tb = sys.exc_info()
    #         fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    #         ex_str = str(e) + " at " + str(exc_type) + ": " + fname + ": line " + str(exc_tb.tb_lineno)
    #         print(ex_str)

    #         return jsonify({
    #             "code": 500,
    #             "message": "upload_signup.py internal error: " + ex_str
    #         }), 500

    # if reached here, not a JSON request.
    return jsonify({
        "code": 400,
        "message": "Invalid JSON input: " + str(request.get_data())
    }), 400

def processUploadSignUps(fileRowData, fileName, eventId):
    print('\n-----Invoking attendance microservice-----')
    # headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    attendance_result = invoke_http(attendanceURL + 'upload', method='POST', json={"fileRowData": fileRowData, "eventId": eventId}, headers=headers)
    # attendance_result = requests.request('POST', attendanceURL + 'upload', json={'fileRowData': fileRowData, 'fileName': fileName, 'eventID': 1})
    print('attendance_result:', attendance_result)
    code = attendance_result['code']
    if code not in range(200,300): 
        return {
            "code": 400,
            "data": {"attendance_result": attendance_result},
            "message": "Sign up sheet creation failed."
        }
    
    return {
        "code": 201,
        "data": {
            "attendance_result": attendance_result
        }
    }

@app.route("/getSignUpDetails/<string:eventID>")
def getSignUpDetails(eventID): 
    print('\n\n-----Invoking attendance microservice-----')
    attendance_result = invoke_http(attendanceURL + 'getSignUpsByEventId/' + eventID)
    print("attendance_result:", attendance_result, '\n')

    code = attendance_result["code"]
    if code not in range(200, 300):
        return {
            "code": 400,
            "data": {"attendance_result": attendance_result},
            "message": "Finding sign up matriculation numbers failed."
        }
    
    print('\n\n-----Invoking student microservice-----')
    student_result = invoke_http(studentURL + 'group', method='POST', json=attendance_result['data'])
    print('student_result:', student_result)
    #### uncomment the below once xunyi adds a 'code' in his json output
    # code = student_result['code']
    # if code not in range(200,300): 
    #     return { 
    #         'code': 400, 
    #         'data': {
    #             'attendance_result': attendance_result,
    #             'student_result': student_result
    #         }, 
    #         'message': 'Finding sign up student detais failed.'
    #     }
    
    return {
        "code": 201,
        "data": {
            "attendance_result": attendance_result,
            "student_result": student_result
        }
    }

@app.route('/broadcast', methods=['POST'])
def broadcast():
    
    
    #changed from telehandles
    message = request.json.get('messageText')
    matricNums = request.json.get('matricNums')

    # data = combine message + matricNums
    data = {'message': message, 'matricNums': matricNums}

    #Cloud AMQP
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
    exchange="ex_events"
    routing_key ="events.scis.wad"
    
    # message={"message":"Glory to God", "matricNums":["2154151", "31415", "Works"]}
    
    # Publish message
    channel.basic_publish(
        exchange=exchange,
        routing_key=routing_key,
        #body='{"message":"God is great", "matricNums":["213173"]}'
        body=json.dumps(data)
    )

    # Close connection
    connection.close()

    # # Code to broadcast message to all attendees
    return {'success': True}

    # # Code to broadcast message to all attendees
    return {'success': True}

if __name__ == "__main__":
    # broadcast()
    print("This is flask " + os.path.basename(__file__) +
          " for uploading sign up and getting sign up details...")
    app.run(host="0.0.0.0", port=5110, debug=True)
