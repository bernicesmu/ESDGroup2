from flask import Flask, request, jsonify
from flask_cors import CORS

import os, sys

import requests
from invokes import invoke_http

app = Flask(__name__)
CORS(app)

# bernice to fill
club_URL = ""
student_URL = ""
error_URL = "" 

@app.route("/club_members/<string:clubID>", methods=['GET'])
def getClubMembersDetails(clubID): 
    print("\nReceived Club ID: " + clubID)
    try: 
        result = processStudents(clubID)
        return jsonify(result), result['code']
    except Exception as e: 
        return jsonify({
            "code": 500, 
            "message": "clubMembers.py internal error: "  
        }), 500 
        
def processStudents(clubID): 
    print('\n\n------Invoking Club microservice------')
    club_members_matric = invoke_http(club_URL, method="GET", json=clubID)
    print('club members matric num:', club_members_matric)

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
    club_members_full = invoke_http(student_URL, method="GET", json=club_members_matric)
    print('club members full details:', club_members_full)

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
    app.run(host="0.0.0.0", port=5100, debug=True)

        



### from ESD labs, for my own internal reference, will delete later 
def place_order():
    # Simple check of input format and data of the request are JSON
    if request.is_json:
        try:
            order = request.get_json()
            print("\nReceived an order in JSON:", order)

            # do the actual work
            # 1. Send order info {cart items}
            result = processPlaceOrder(order)
            return jsonify(result), result["code"]

        except Exception as e:
            # Unexpected error in code
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            ex_str = str(e) + " at " + str(exc_type) + ": " + fname + ": line " + str(exc_tb.tb_lineno)
            print(ex_str)

            return jsonify({
                "code": 500,
                "message": "place_order.py internal error: " + ex_str
            }), 500

    # if reached here, not a JSON request.
    return jsonify({
        "code": 400,
        "message": "Invalid JSON input: " + str(request.get_data())
    }), 400

def processPlaceOrder(order):
    # 2. Send the order info {cart items}
    # Invoke the order microservice
    print('\n-----Invoking order microservice-----')
    order_result = invoke_http(order_URL, method='POST', json=order)
    print('order_result:', order_result)

    # 4. Record new order
    # record the activity log anyway
    print('\n\n-----Invoking activity_log microservice-----')
    invoke_http(activity_log_URL, method="POST", json=order_result)
    print("\nOrder sent to activity log.\n")
    # - reply from the invocation is not used;
    # continue even if this invocation fails

    # Check the order result; if a failure, send it to the error microservice.
    code = order_result["code"]
    if code not in range(200, 300):

        # Inform the error microservice
        print('\n\n-----Invoking error microservice as order fails-----')
        invoke_http(error_URL, method="POST", json=order_result)
        # - reply from the invocation is not used; 
        # continue even if this invocation fails
        print("Order status ({:d}) sent to the error microservice:".format(
            code), order_result)

        # 7. Return error
        return {
            "code": 500,
            "data": {"order_result": order_result},
            "message": "Order creation failure sent for error handling."
        }

    # 5. Send new order to shipping
    # Invoke the shipping record microservice
    print('\n\n-----Invoking shipping_record microservice-----')
    shipping_result = invoke_http(
        shipping_record_URL, method="POST", json=order_result['data'])
    print("shipping_result:", shipping_result, '\n')

    # Check the shipping result; 
    # if a failure, send it to the error microservice.
    code = shipping_result["code"]
    if code not in range(200, 300):

        # Inform the error microservice
        print('\n\n-----Invoking error microservice as shipping fails-----')
        invoke_http(error_URL, method="POST", json=shipping_result)
        print("Shipping status ({:d}) sent to the error microservice:".format(
            code), shipping_result)

        # 7. Return error
        return {
            "code": 400,
            "data": {
                "order_result": order_result,
                "shipping_result": shipping_result
            },
            "message": "Simulated shipping record error sent for error handling."
        }

    # 7. Return created order, shipping record
    return {
        "code": 201,
        "data": {
            "order_result": order_result,
            "shipping_result": shipping_result
        }
    }

# Execute this program if it is run as a main script (not by 'import')
if __name__ == "__main__":
    print("This is flask " + os.path.basename(__file__) +
          " for placing an order...")
    app.run(host="0.0.0.0", port=5100, debug=True)
    # Notes for the parameters:
    # - debug=True will reload the program automatically if a change is detected;
    #   -- it in fact starts two instances of the same flask program,
    #       and uses one of the instances to monitor the program changes;
    # - host="0.0.0.0" allows the flask program to accept requests sent from any IP/host (in addition to localhost),
    #   -- i.e., it gives permissions to hosts with any IP to access the flask program,
    #   -- as long as the hosts can already reach the machine running the flask program along the network;
    #   -- it doesn't mean to use http://0.0.0.0 to access the flask program.
