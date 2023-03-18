from flask import Flask, render_template, request
import pandas as pd
import mysql.connector
from flask_cors import CORS

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

    df = pd.read_excel(file)
    conn = mysql.connector.connect(host ="localhost", user="is213", database="attendance")
    cursor = conn.cursor()
    cursor.execute('DROP TABLE IF EXISTS sign_ups')
    cursor.execute('CREATE TABLE my_table (column1 INT AUTO INCREMENT, column2 INT, column3 BOOLEAN, column4 BOOLEAN, column5 BOOLEAN)')
    for i, row in df.iterrows():
        cursor.execute('INSERT INTO my_table (id, studentMatricNum, signUp, attended, late) VALUES (%s, %s, %s, %s, %s)', (row['id'], row['studentMatricNum'], row['signUp'], row['attended'], row['late']))
    conn.commit()
    """ cursor.execute('SELECT * FROM my_table')
    data = cursor.fetchall() """
    cursor.close()
    conn.close()
    # return render_template('upload.html', data=data)
    
    return {'success': True, 'message': 'File uploaded successfully.'}

if __name__ == '__main__':
    app.run(debug=True)