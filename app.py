from flask import Flask
from flask import render_template, request
from textblob import Word
import json
import main

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_end_predictions', methods=['post'])
def get_prediction_eos():
    try:
        input_text = ' '.join(request.json['input_text'].split())
        input_text += ' <mask>'
        top_k = request.json['top_k']
        res = main.get_all_predictions(input_text, top_clean=int(top_k))
        return app.response_class(response=json.dumps(res), status=200, mimetype='application/json')
    except Exception as error:
        return app.response_class(response=json.dumps(str(error)), status=500, mimetype='application/json')


@app.route('/auto_correction', methods=["POST"])
def auto_correction():
    data = {'result': [], 'underline': False, 'word': ''}
    try:
        input_text = (' '.join(request.json['input_text'].split())).split(' ')[-1]
        if Word(input_text).spellcheck()[0][1] < 1.0:
            sug_words = [i[0] for i in Word(input_text).spellcheck()[:3]]
            data = {'result': sug_words, 'underline': True, 'word': input_text}
        return app.response_class(response=json.dumps(data), status=200, mimetype='application/json')
    except Exception as error:
        return app.response_class(response=json.dumps(str(error)), status=500, mimetype='application/json')


app.config["DEBUG"] = True

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8083)   

