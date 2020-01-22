from bottle import route, run
import requests
import json
import sqlite3

# TODO client skal sende requests hertil med et user_id.
# Test user (skal fjernes)
user1 = 11111111
user2 = 22222222



# DB Connection
db = sqlite3.connect('bank.db')
# Statement for executing a command in sqlite
stmt = db.cursor()
# Select the row of the users account
row = stmt.execute('SELECT * FROM accounts WHERE user_id = ?', (user1,)).fetchone()


@route('/')
def index():
    return json.dumps(row)

run(host='localhost', port=1111, debug=1, reloader=0)