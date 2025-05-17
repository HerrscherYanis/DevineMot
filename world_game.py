import random

class Word:
    def __init__(self):
        self.Read_list()
    
    def Read_list(self):
        world = open("World_List.txt", "r")
        self.list_world = world.read().split("\n")
        self.min = 0
        self.max = len(self.list_world)-1

    def rand_world(self):
        return self.list_world[random.randint(self.min,self.max)]

class User(Word):
    def __init__(self, difficulty):
        super().__init__()
        self.life = int(10 * difficulty)
        self.word_search = self.rand_world()

