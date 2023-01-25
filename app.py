# to load the data
import pickle

# For the Flask app
import numpy as np
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
model = pickle.load(open('model.pkl','rb'))
print("MODEL LOADED")

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    
    test_data = []
    features = ['Pregnancies','Glucose','BloodPressure',
    'SkinThickness','Insulin','BMI',
    'DiabetesPedigreeFunction','Age'] 
    # getting input from HTML form
    for feature in features:
        test_data.append(request.form.get(feature))
    print('VALUES RECEIVED FROM THE HTML FORM')
    #All data preprocessing steps should appear here
    print(test_data)
    prediction = model.predict(np.array(test_data).reshape(1,-1))
    output = prediction[0]
    print(f'PREDICTED {output}')
    #final_value = jsonify(output)
    return render_template("index.html",predicted_value=output)

if __name__ == '__main__':
    app.run(debug=True)