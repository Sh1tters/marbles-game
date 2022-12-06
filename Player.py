import pygame
import os

class Player(pygame.sprite.Sprite):
    def __init__(self, surface):
        super().__init__()
        self.surface = surface
        self.image  = pygame.image.load(os.path.join('assets', 'player.png'))
        self.image = self.fixImage(self.image)
        self.rect = self.image.get_rect()
        self.speed = [0, 0]
        self.friction = +1
        self.gravity = +1
        area = pygame.display.get_surface().get_rect()
        self.width, self.height = area.width, area.height
        self.counter = 0
        self.delta = [0, 0] # Takes [-20, 0], [20, 0], [0, -20], [0, 20]

    def fixImage(self, image):
        return pygame.transform.scale(image, (50, 50))

    def drawPlayer(self):
        # Draw Player
        self.surface.blit(self.image, self.rect)

    def apply_gravity(self):
        # Control delta (X,Y)
        self.speed[0] += self.delta[0]
        self.speed[1] += self.delta[1]

        # Control friction
        self.speed = [self.friction*s for s in self.speed]
        self.speed[1] += self.gravity

        self.rect = self.rect.move(self.speed)
        if self.rect.left < 0 or self.rect.right > self.width:
            self.speed[0] = -self.speed[0]
        if self.rect.top < 0 or self.rect.bottom > self.height:            
            # set friction to 0.98
            self.friction = 0.99
            self.speed[1] = -self.speed[1]

            tolerance = 5
            # Check for tolerance
            if self.rect.bottom + tolerance > self.height: # Make ball lay still horizontal from a counter
                print(self.rect.bottom, self.height)
                self.counter += 1
                if self.counter > 30:
                    # reset counter
                    self.counter = 0
                    
                    # set friction to 0
                    self.friction = 0
            else:
                # reset counter
                self.counter = 0
        self.rect.left = self.clip(self.rect.left, 0, self.width)
        self.rect.right = self.clip(self.rect.right, 0, self.width)        
        self.rect.top = self.clip(self.rect.top, 0, self.height)
        self.rect.bottom = self.clip(self.rect.bottom, 0, self.height)  

    def updatePlayer(self):
        self.apply_gravity()
        self.drawPlayer()

    def clip(self, val, minval, maxval):
        return min(max(val, minval), maxval)