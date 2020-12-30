# CorrectMe
This Project contains two api one is auto corrections and auto suggestions.
Auto correction build with the help of textblob library and auto suggestions with the help of transforms and bart large model.

## Project Intro
The purpose of this project is to train next word predicting models. Models should be able to suggest the next word after user has input word/words
auto correct the incorrect word/s like Gmail and Grammarly doing. 

### Methods Used
* Language Prediction
* Natural Language Processing
* Transformers Bart Model
* Textblob

![CorrectMe](correctme.gif)

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


![Screenshot of website running](assets/predword.png)

# Authors

* **Deepak Chawla** - [Linkedin](https://www.linkedin.com/in/deepakchawla1307/)

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration