from flask import Flask, request, jsonify
from flask_cors import CORS

import os, sys

from invokes import invoke_http

app = Flask(__name__)
CORS(app)

# bernice to fill
club_URL = "http://laravel-docker:80/api/club_members"
student_URL = "http://student:8080/student/group"
error_URL = "" 

@app.route("/club_members/<clubID>", methods=['GET'])
def getClubMembersDetails(clubID): 
    print("\nReceived Club ID: " + clubID)
    try: 
        result = processStudents(clubID)
        return jsonify(result), result['code']
    except Exception as e:
        return jsonify({
            "code": 500,
            "message": "getClubMembers.py internal error: " + str(e)
    }), 500
        
def processStudents(clubID): 
    print('\n\n------Invoking Club microservice------')
    print("invoke_http function:", invoke_http)
    club_members_matric = invoke_http(f"{club_URL}/{clubID}", method="GET")
    
    print('Club microservice response:', club_members_matric)
    print('Club members matric num:', club_members_matric['data'])
 

    code = club_members_matric["code"]
    if code not in range(200, 300): 
        print('\n\n------Invoking Error microservice------')
        invoke_http(error_URL, method="POST", json=club_members_matric)
        print('Club members matric status ({:d}) sent to the error microservice:', format(code), club_members_matric)
        
        return {
            "code": 500, 
            "data": {"club_members_matric": club_members_matric}, 
            "message": "Club members retrieval from Club microservice failed and sent to Error microservice for error handling."
        }

    print('\n\n------Invoking Student microservice------')
    # response = requests.post(student_URL, data=json.dumps(club_members_matric['data']), headers={'Content-Type': 'application/json'})
    # club_members_full = response.json()
    print("\nData sent to Student microservice:", club_members_matric['data'])

    club_members_full = invoke_http(student_URL, method="POST", json=club_members_matric['data'])
    print('Club members full details:', club_members_full)

    code = club_members_full["code"]
    if code not in range(200, 300): 
        print('\n\n------Invoking Error microservice------')
        invoke_http(error_URL, method="POST", json=club_members_full)
        print('Club members full status ({:d}) sent to the error microservice:', format(code), club_members_full)
        
        return {
            "code": 500, 
            "data": {
                "club_members_matric": club_members_matric,
                "club_members_full": club_members_full
            }, 
            "message": "Club members' details retrieval from Student microservice failed and sent to Error microservice for error handling."
        }

    return { 
        "code": 201, 
        "data": { 
            "club_members_matric": club_members_matric,
            "club_members_full": club_members_full
        }
    }

if __name__ == "__main__": 
    print("This is flask " + os.path.basename(__file__) + " for finding Club Member Details...")
    app.run(host="0.0.0.0", port=5107, debug=True)
