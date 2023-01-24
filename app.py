import os 
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
@app.route("/")
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def getResults():
    data = request.json
    print(data)
    print('test')
    return ('Base was stolen')

