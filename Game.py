import pygame
from config import *
    
pygame.init()    
screen = pygame.display.set_mode((width, height))    
clock = pygame.time.Clock()  
game_running = True
scene = 0
"""
    scene: 0 # Menu
    scene: 1 # Game
"""
    
while game_running:    
    clock.tick(frameRate) # FPS

    # Background
    background = pygame.Surface(screen.get_size())
    background.fill(backgroundColor)
    screen.blit(background, (0, 0))
    
    for event in pygame.event.get():    
        if event.type == pygame.QUIT:    
            game_running = False 
    pygame.display.update()   
pygame.quit()