from flask import Flask, redirect, request, url_for, render_template


app = Flask(__name__, template_folder='./templates', static_folder='./static')

app.secret_key = 'vfdbdfbdfbdbdfbdbdfbdfbd'

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=7000)
