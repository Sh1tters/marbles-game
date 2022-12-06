import pygame
from config import *
from Player import Player

# INIT
pygame.init()    
surface = pygame.display.set_mode((width, height))    
clock = pygame.time.Clock()  
game_running = True
player = Player(surface)

while game_running:    
    clock.tick(frameRate) # FPS

    # Background
    background = pygame.Surface(surface.get_size())
    background.fill(backgroundColor)
    surface.blit(background, (0, 0))

    # Update Player
    player.updatePlayer()
    
    for event in pygame.event.get():    
        if event.type == pygame.QUIT:    
            game_running = False 
    pygame.display.update()   
pygame.quit()
