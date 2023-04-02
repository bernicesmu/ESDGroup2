from flask import Flask, request, jsonify
from flask_cors import CORS

import os, sys

from invokes import invoke_http

app = Flask(__name__)
CORS(app)

# bernice to fill
club_URL = "http://laravel-docker:80/api/club_members"
club_exco_URL = "http://laravel-docker:80/api/club_excos"
student_URL = "http://student:8080/student/group"
error_URL = "" 

@app.route("/get_club_members/<clubID>", methods=['GET'])
def getClubMembersDetails(clubID): 
    print("\nReceived Club ID: " + clubID)
    try: 
        result = processStudents(clubID)
        print("Result from processStudents:", result)
        return jsonify(result), result['code']
    except Exception as e:
        return jsonify({
            "code": 500,
            "message": "getClubMembers.py internal error: " + str(e)
    }), 500
        
def processStudents(clubID): 
    print('\n\n------Invoking Club microservice------')
    # print("invoke_http function:", invoke_http)
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
    
    ## Invoking student microservice to get full student details of club members
    club_members_full = invoke_http(student_URL, method="POST", json=club_members_matric['data'])
    print(club_members_full)

    ## Invoking club members to get full club member details of club members
    club_members_details = invoke_http(f"{club_URL}/{clubID}", method="GET")
    print(club_members_details)

    # Extracting the yearJoined data from club_members_details
    club_members_details = club_members_details["data"]

    # Creating a dictionary with studentMatricNum as the key and yearJoined as the value
    year_joined_dict = {member["studentMatricNum"]: member["yearJoined"] for member in club_members_details}
    
    # Creating a dictionary with studentMatricNum as the key and club_member id as the value
    club_member_dict = {member["studentMatricNum"]: member["id"] for member in club_members_details}
    
    # Creating a dictionary with club_member_id as key and club position as value
    club_exco_roles = {}
    for member in club_members_details:
        club_member_id = member["id"]
        exco_details = invoke_http(f"{club_exco_URL}/by_member/{club_member_id}", method="GET")
        # print("Printing exco_details", exco_details)
        if exco_details["code"] in range(200, 300) and exco_details["club_exco"]:
            club_exco_roles[club_member_id] = exco_details["club_exco"][0]["role"]
    ## Invoking club exco to get club exco details of club members
    # club_excos_details = invoke_http(f"{club_exco_URL}/{clubID}", method="GET")

    ## Updating club_members_full with the yearJoined, position
    for member in club_members_full.get("details", []):
        member["yearJoined"] = year_joined_dict.get(member["matricNum"], None)
        club_member_id = club_member_dict.get(member["matricNum"], None)
        print("Club_member_id: ", club_member_id)
        print("Club_member_full: ", club_members_full)
        if club_member_id:
            member["clubPosition"] = club_exco_roles.get(club_member_id, None)
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
            "club_members_full": club_members_full["details"]
        }
    }

if __name__ == "__main__": 
    print("This is flask " + os.path.basename(__file__) + " for finding Club Member Details...")
    app.run(host="0.0.0.0", port=5107, debug=True)
