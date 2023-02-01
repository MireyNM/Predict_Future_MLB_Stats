import os 
import pickle
from cProfile import run
import datetime as dt
import numpy as np
import pandas as pd
from flask import Flask, jsonify, render_template, request

# First run code in terminal
## env | grep FLASK
# Run code: connect flask app with file app.py
## export FLASK_APP=app.py
# Run code: launch website
## flask run 
# Website link
## http://127.0.0.1:5000/

app = Flask(__name__)
with open('static/data/Clean_Data/next_BsR_batt.js') as f:
    model = f.readlines()
    print("MODEL LOADED")

@app.route("/")
def index():
    return render_template('main.html')

@app.route("/Stats")
def Stats():
    return render_template('Stats.html')

@app.route("/batterBsR")
def batter():
    return render_template('battersBsR.html')

@app.route("/pitchersWAR")
def pitcher():
    return render_template('pitchersWAR.html')

@app.route("/previousgames")
def games():
    return render_template('previousgames.html')

@app.route("/stealingBase")
def Base():
    return render_template('stealingBase.html')

@app.route('/result', methods=['POST'])
def getResults():
    # data = request.json
    test_data = []
    features = ['Name']
    for feature in features:
        test_data.append(request.form.get(feature))
    print('Values received from the html form')

    print(test_data)
    prediction = model.predict(np.array(test_data).reshape(1,-1))
    output = prediction[0]
    return render_template("main.html", predicted_value=output)
    # return ('test')

@app.route("/contactUs")
def contact():
    return render_template('contact.html')

@app.route("/Mireille")
def Mireille():
    return render_template('contactMir.html')

@app.route("/Nathalie")
def Nathalie():
    return render_template('contactNat.html')

@app.route("/Sam")
def Sam():
    return render_template('contactSam.html')

@app.route("/Wyatt")
def Wyatt():
    return render_template('contactWyat.html')

if __name__ == '__main__':
    app.run(debug=True)
