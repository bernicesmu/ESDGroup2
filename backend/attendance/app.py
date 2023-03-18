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
    conn = mysql.connector.connect(host ="localhost", port=8889, user="is213", password='', database="attendance")
    cursor = conn.cursor()
    cursor.execute('DROP TABLE IF EXISTS my_table2')
    cursor.execute('CREATE TABLE my_table2 (id INT AUTO_INCREMENT, studentMatricNum INT, signUp BOOLEAN, attended BOOLEAN, late BOOLEAN, PRIMARY KEY (id))')

    for i, row in df.iterrows():
        cursor.execute('INSERT INTO my_table2 (id, studentMatricNum, signUp, attended, late) VALUES (%s, %s, %s, %s, %s)', (int(row['id']), int(row['studentMatricNum']), int(row['signUp']), int(row['attended']), int(row['late'])))

    conn.commit()
    """ cursor.execute('SELECT * FROM my_table2')
    data = cursor.fetchall() """
    cursor.close()
    conn.close()
    # return render_template('upload.html', data=data)
    
    return {'success': True, 'message': 'File uploaded successfully.'}

if __name__ == '__main__':
    app.run(debug=True)