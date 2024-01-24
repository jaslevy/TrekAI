from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def landing():
    return "Welcome to the landing page!"

@app.route("/testAPI")
def testing():
    return {"Users": ["John Doe", "James Crawford"]}

### Begin setup of Login and user authentication for application. 
### UserID should be kept in the environment once logged in for given "session" in order to enable
### automatic rendering of relevant user info past the landing page as well as user prompt history. 
### could add a prompt limit to 10 prompts per user, and unlimited for admin.

### Need to figure out which database to use for storing user information + prompt history.
### Need to pick a DB with optimal storage of larger paragraphs of text.

if __name__ == "__main__":
    app.run(debug = True)