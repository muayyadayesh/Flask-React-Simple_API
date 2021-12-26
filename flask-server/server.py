from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/members")
# API route for members
def members():
    return {"members": ['member1', 'member2', 'member3']}


# Main entry point
if __name__ == "__main__":
    app.run(debug=True)
