from flask import Flask, render_template, request, jsonify
import pandas as pd
import mysql.connector
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def upload_form():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    if not file:
        return {'success': False, 'message': 'Error: No File selected, File must be in .xlsx format'}

    # Extract filename without extension (filename will be eventDetID)
    filename = os.path.splitext(file.filename)[0] 

    df = pd.read_excel(file)
    conn = mysql.connector.connect(host ="localhost", port=8889, user="is213", password='', database="attendance")

    cursor = conn.cursor()
    cursor.execute(f'DROP TABLE IF EXISTS `{filename}`')
    cursor.execute(f'CREATE TABLE `{filename}` (id INT AUTO_INCREMENT, studentMatricNum INT, telegramID VARCHAR(30), signUp BOOLEAN, attended BOOLEAN, late BOOLEAN, PRIMARY KEY (id))')

    for i, row in df.iterrows():
        cursor.execute(f'INSERT INTO `{filename}` (id, studentMatricNum, telegramID, signUp, attended, late) VALUES (%s, %s, %s, %s, %s, %s)', (int(row['id']), int(row['studentMatricNum']), str(row['telegramID']), int(row['signUp']), int(row['attended']), int(row['late'])))

    conn.commit()
    cursor.execute(f'SELECT * FROM `{filename}`')
    data = cursor.fetchall()
    cursor.close()
    conn.close()

    # Convert the data to a list of dictionaries
    results = []
    for row in data:
        results.append({
            'id': row[0],
            'studentMatricNum': row[1],
            'telegramID' : row[2],
            'signUp': bool(row[3]),
            'attended': bool(row[4]),
            'late': bool(row[5])
        })

    # Return the data in JSON format and the rendered HTML template with the table
    if len(data) >0:
        return jsonify({'data': results}), render_template('upload.html', data=data, filename=filename)
    else:
        return {'success': True, 'message': 'File uploaded successfully.'}

if __name__ == '__main__':
    app.run(debug=True)
