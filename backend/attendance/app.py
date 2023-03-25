import json
from flask import Flask, request, jsonify
import pandas as pd
import mysql.connector
from flask_cors import CORS
import os, sys
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@host.docker.internal:3306/attendance' 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/attendance' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)

class Attendance(db.Model):
    __tablename__ = 'sign_ups'

    eventId = db.Column(db.String(20), nullable=False, primary_key=True)
    studentMatricNum = db.Column(db.String(20), nullable=False)
    signUp = db.Column(db.Integer)
    
    def __init__(self, eventId, studentMatricNum, signUp):
        self.eventId = eventId
        self.studentMatricNum = studentMatricNum
        self.signUp = signUp

    def json(self):
        return {"eventId": self.eventId, "studentMatricNum": self.studentMatricNum, "signUp": self.signUp}

# Get the values of the environment variables
db_host = os.environ.get('db_host', 'localhost')
db_port = os.environ.get('db_port', '8889')
db_user = os.environ.get('db_user', 'is213')
db_password = os.environ.get('db_password', '')
db_name = os.environ.get('db_name', 'attendance')

@app.route('/')
def upload_form():
    return ('Success')

@app.route('/getAll')
def getAll(): 
    signUpList = Attendance.query.all() 
    if len(signUpList):
        result = [] 
        for signup in signUpList: 
            result.append(signup.json())
        return jsonify(
            {
                "code": 200,
                "data": {
                    "attendance": result
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "There are no sign ups."
        }
    ), 404

@app.route('/upload')
def upload():
    print("oifjwoi")
    # file = request.files['file']
    # if not file:
    #     return {'success': False, 'message': 'Error: No File selected.'}

    # # Extract filename without extension (filename will be eventDetID)
    # filename = os.path.splitext(file.filename)[0] 

    # df = pd.read_excel(file)

    if request.is_json: 
        try: 
            jsonData = request.get_json()
            print("\nReceived file data in json:", jsonData) 
            fileRowData = jsonData['fileRowData']
            filename = jsonData['fileName']
            eventID = jsonData['eventID']
            print("pipokpodrefvkj")
            # Use the environment variable values to create the database connection
            # conn = mysql.connector.connect(
            #     host=db_host,
            #     port=db_port,
            #     user=db_user,
            #     password=db_password,
            #     database=db_name
            # )

            #### atrayee 
            # cursor = conn.cursor()
            # cursor.execute(f'DROP TABLE IF EXISTS `{filename}`')
            # cursor.execute(f'CREATE TABLE `{filename}` ( name VARCHAR(50), studentMatricNum VARCHAR(50), telegramID VARCHAR(30), smuEmail VARCHAR(50), PRIMARY KEY (studentMatricNum))')

            # for row in fileRowData:
            #     cursor.execute(f'INSERT INTO `{filename}` (name, studentMatricNum, telegramID, smuEmail) VALUES (%s, %s, %s, %s)', (str(row[0]), str(row[1]), str(row[2]), str(row[3])))

            # conn.commit()
            # cursor.execute(f'SELECT * FROM `{filename}`')
            # data = cursor.fetchall()
            # cursor.close()
            # conn.close()

            # # Convert the data to a list of dictionaries
            # results = []
            # for row in data:
            #     results.append({
            #         'name': row[0],
            #         'studentMatricNum': row[1],
            #         'telegramID' : row[2],
            #         'smuEmail': row[3]
            #     })

            # #### bernice

            failedSignUps = []
            successfulSignUps = [] 
            for row in fileRowData: 
                if (Attendance.query.filter_by(eventId=eventID, studentMatricNum=str(row[1])).first()):
                    failedSignUps.append([eventID, str(row[1])])
                    continue

                signup = Attendance(eventID, str(row[1]), 1)

                try:
                    db.session.add(signup)
                    db.session.commit()
                except:
                    return jsonify(
                        {
                            "code": 500,
                            "data": {
                                "signup": signup
                            },
                            "message": "An error occurred creating the signup."
                        }
                    ), 500
        
                successfulSignUps.append([eventID, str(row[1])])

            return jsonify(
                {
                    "code": 201,
                    "data": {
                        "failed": failedSignUps, 
                        "success": successfulSignUps
                    }
                }
            ), 201
        
            cursor = conn.cursor() 
            for row in fileRowData: 
                cursor.execute(f'INSERT INTO sign_ups (eventID, studentMatricNum, signUp) VALUES (%s, %s, %s)', (str(eventID), str(row[1]), '1'))
            
            conn.commit()
            cursor.execute(f'SELECT * FROM sign_ups WHERE eventID = %s AND signUp = 1', (str(eventID)))
            data = cursor.fetchall()
            cursor.close() 
            conn.close() 

            results = [] 
            for row in data: 
                results.append({ 
                    'eventID': row[0], 
                    'studentMatricNum': row[1], 
                    'signUp': row[2]
                })

            print("chuidolks")
            # Return the data in JSON format and the rendered HTML template with the table
            if len(data) > 0:
                return jsonify({
                    'code': 200,
                    'data': results
                }), 200
            else:
                return jsonify({
                    'code': 400,
                    'success': False, 
                    'message': 'Error: File Empty.'
                }), 400
        except Exception as e:
            print("p098wiueydhjs")
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            ex_str = str(e) + " at " + str(exc_type) + ": " + fname + ": line " + str(exc_tb.tb_lineno)
            print(ex_str)

            return jsonify({
                "code": 500,
                "message": "attendance app.py internal error: " + ex_str
            }), 500
    
    print("wosaedicfvjk ")
    return jsonify({
        "code": 400,
        "message": "Invalid JSON input: " + str(request.get_data())
    }), 400

@app.route('/getSignUpsByEventId/<string:eventID>') 
def getEventById(eventID): 
    try: 
        conn = mysql.connector.connect(
                    host=db_host,
                    port=db_port,
                    user=db_user,
                    password=db_password,
                    database=db_name
                )
        
        cursor = conn.cursor() 
        conn.commit()
        cursor.execute(f'SELECT * FROM sign_ups WHERE eventID = %s AND signUp = 1', (eventID,))
        data = cursor.fetchall()
        cursor.close() 
        conn.close() 

        results = [] 
        for row in data: 
            results.append(row[1])
        
        return jsonify({
                    'code': 200,
                    'data': results
                }), 200
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        ex_str = str(e) + " at " + str(exc_type) + ": " + fname + ": line " + str(exc_tb.tb_lineno)
        print(ex_str)

        return jsonify({
            "code": 500,
            "message": "attendance app.py internal error: " + ex_str
        }), 500
        

@app.route('/broadcast', methods=['POST'])
def broadcast():
    message = request.json.get('messageText')
    # Code to broadcast message to all attendees
    return {'success': True}
 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5105, debug=True)