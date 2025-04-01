import random


class Game:
    def __init__(self):
        self.Read_list()
        self.restart()
        self.search_user = []
        for _ in self.search_world:
            self.search_user.append("_")
    
    def Read_list(self):
        world = open("World_List.txt", "r")
        self.list_world = world.read().split("\n")
        self.min = 0
        self.max = len(self.list_world)-1

    def rand_world(self):
        return self.list_world[random.randint(self.min,self.max)]

    def restart(self):
        self.search_world = self.rand_world()
        self.rest = 5

    def convert(self):
        return ''.join(str(f"{x} ") for x in self.search_user)

g = Game()
print(g.convert())