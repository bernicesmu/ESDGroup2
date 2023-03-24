import json
from flask import Flask, render_template, request, jsonify
import pandas as pd
import mysql.connector
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Get the values of the environment variables
db_host = os.environ.get('db_host', 'localhost')
db_port = os.environ.get('db_port', '8889')
db_user = os.environ.get('db_user', 'is213')
db_password = os.environ.get('db_password', '')
db_name = os.environ.get('db_name', 'attendance')

@app.route('/')
def upload_form():
    return ('Success')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    if not file:
        return {'success': False, 'message': 'Error: No File selected.'}

    # Extract filename without extension (filename will be eventDetID)
    filename = os.path.splitext(file.filename)[0] 

    df = pd.read_excel(file)
    # Use the environment variable values to create the database connection
    conn = mysql.connector.connect(
    host=db_host,
    port=db_port,
    user=db_user,
    password=db_password,
    database=db_name
)

    cursor = conn.cursor()
    cursor.execute(f'DROP TABLE IF EXISTS `{filename}`')
    cursor.execute(f'CREATE TABLE `{filename}` ( name VARCHAR(50), studentMatricNum VARCHAR(50), telegramID VARCHAR(30), smuEmail VARCHAR(50), PRIMARY KEY (studentMatricNum))')

    for i, row in df.iterrows():
        cursor.execute(f'INSERT INTO `{filename}` (name, studentMatricNum, telegramID, smuEmail) VALUES (%s, %s, %s, %s)', (str(row['name']), str(row['studentMatricNum']), str(row['telegramID']), str(row['smuEmail'])))

    conn.commit()
    cursor.execute(f'SELECT * FROM `{filename}`')
    data = cursor.fetchall()
    cursor.close()
    conn.close()

    # Convert the data to a list of dictionaries
    results = []
    for row in data:
        results.append({
            'name': row[0],
            'studentMatricNum': row[1],
            'telegramID' : row[2],
            'smuEmail': row[3]
        })

    # Return the data in JSON format and the rendered HTML template with the table
    if len(data) >0:
        return jsonify({'data': results})
    else:
        return {'success': False, 'message': 'Error: File Empty.'}


@app.route('/broadcast', methods=['POST'])
def broadcast():
    message = request.json.get('messageText')
    # Code to broadcast message to all attendees
    return {'success': True}
 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5105, debug=True)