from flask import Flask, render_template
from world_game import User

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html', pageTitle="Devine le mot")

@app.route('/game/<difficulty>')
def game_Page(difficulty):
    if(difficulty == "easy"):
        user = User(2)
    elif(difficulty == "medium"):
        user = User(1.5)
    elif(difficulty == "hard"):
        user = User(1)
    else:
        return render_template('404.html')
    return render_template('game.html', pageTitle="Devine le mot", word = user)

@app.route('/game/win')
def win():
    return render_template('win.html')

@app.route('/game/finality')
def final():
    return render_template('finality.html')

if __name__ == '__main__':
    app.run(
        host="98.66.153.56",
        port=80,
        debug = False)