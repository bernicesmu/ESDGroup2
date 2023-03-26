import json
from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS
import os, sys
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@host.docker.internal:3306/attendance' 
# atrayee - only works when using 8889
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
    
    if request.is_json: 
        try: 
            jsonData = request.get_json()
            print("\nReceived file data in json:", jsonData) 
            fileRowData = jsonData['fileRowData']
            filename = jsonData['fileName']
            eventID = jsonData['eventID']
            print("pipokpodrefvkj")
            
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

        signups = Attendance.query.filter_by(eventId=eventID, signUp=1).all()

        results = []
        for signup in signups:
            results.append(signup.studentMatricNum)

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