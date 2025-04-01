from flask import Flask, render_template
from world_game import Game

app = Flask(__name__)

@app.route('/', methods = ['GET','POST'])
def root():
    game = Game()
    worldsearch = game.rand_world()
    return render_template('root.html', search=game.convert())

