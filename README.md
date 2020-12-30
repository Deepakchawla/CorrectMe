# CorrectMe
This Project contains two API one is auto-corrections and autosuggestions. Auto-correction build with the help of text blob library and auto-suggestions with the help of transforms and Bart large model.

## Project Intro

The purpose of this project is to train the next word predicting models. Models should be able to suggest the next word after the user has input word/words auto-correct the incorrect word/s like Gmail and Grammarly doing.

![CorrectMe](correctme.gif)

### Methods Used
* Language Prediction
* Natural Language Processing
* Transformers Bart Model
* Textblob

### Technologies
* Python
* Python Flask
* Torch, Transforms
* JS, HTML

## Project Description
* `app.py` - In that file three apis are there, one is auto_correction and second one is auto_suggestion and last one is index file redenring file. 
* `main.py` - use pretrained bart model for next word prediction

## Process Flow
- Frontend development
- Data Collection
- Data Processing/Cleaning
- Words Tokenizing
- Model Training
- Demo development

## Getting Started

### Prerequisites
1. Create python virtual enviorment via command
`virtualenv correctme_env -p python3`

2. Install python dependencies via command
`pip3 install -r requirement.txt`

3. Start server via command `python3 app.py`.

4. Open your browser at http://127.0.0.1:8083/

[![Watch the video](screen_shot_app.png)](https://youtu.be/h4oqBxVlcxA)


# Authors

* **Deepak Chawla** - [Linkedin](https://www.linkedin.com/in/deepakchawla1307/)

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration