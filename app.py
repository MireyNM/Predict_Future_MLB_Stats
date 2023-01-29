import os 
import pickle
from cProfile import run
import datetime as dt
import numpy as np
import pandas as pd
from flask import Flask, jsonify, render_template, request

# env | grep FLASK
# export FLASK_APP=app.py
# flask run 
# http://127.0.0.1:5000/
app = Flask(__name__)
with open('static/data/Clean_Data/next_war.js') as f:
    model = f.readlines()
    print("MODEL LOADED")

@app.route("/")
def index():
    return render_template('base.html')

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
    return render_template("index.html", predicted_value=output)
    # return ('test')

@app.route("/About")

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