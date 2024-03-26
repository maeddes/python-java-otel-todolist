from flask import Flask, render_template, request, jsonify, redirect, url_for

import requests
import os

app = Flask(__name__)

# Set a default external API URL
# Override the default URL if an environment variable is set
app.config['BACKEND_URL'] = 'http://localhost:8080/todos/'
app.config['BACKEND_URL'] = os.getenv('BACKEND_URL', app.config['BACKEND_URL'])

@app.route('/')
def index():

    response = requests.get(app.config['BACKEND_URL'])
    
    if response.status_code == 200:
        # Print out the response content
        print(response.text)
        todos = response.json()
        
    return render_template('index.html', todos=todos)

@app.route('/add', methods=['POST'])
def add():

    if request.method == 'POST':
        new_todo = request.form['todo']
        response = requests.post(app.config['BACKEND_URL']+new_todo)
    return redirect(url_for('index'))

@app.route('/delete', methods=['POST'])
def delete():

    if request.method == 'POST':
        delete_todo = request.form['todo']
        print(delete_todo)
    response = requests.delete(app.config['BACKEND_URL']+delete_todo)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='0.0.0.0')
    # app.run(debug=True) # doesn't work with auto instrumentation
