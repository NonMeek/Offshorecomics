import os
from flask import render_template
from flask.json import jsonify
from flask import Flask
app = Flask(__name__)

@app.route("/images",methods=["GET"] )
def images():
    files = [f for f in os.listdir("./images") if f.endswith(".PNG")]
    return jsonify(files)

@app.route("/Offshorecomics",methods=["GET"] )
def main():
    return render_template("index.html")
