from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data: list of ToDo items (plain strings)
todos = ["Learn Flask", "Build a CRUD app", "Deploy the app"]

@app.route('/')
def index():
    return render_template('index.html', todos=todos)

@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        new_todo = request.form['title']
        todos.append(new_todo)
    return redirect(url_for('index'))

@app.route('/delete/<string:todo>')
def delete(todo):
    global todos
    todos = [t for t in todos if t != todo]
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
