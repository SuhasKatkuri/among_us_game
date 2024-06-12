from django.db import models
from django.contrib.auth.models import User

class Player(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=20)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.CharField(max_length=255)
    is_alive = models.BooleanField(default=True)
    current_room = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.user.username

class GameSession(models.Model):
    players = models.ManyToManyField(Player)
    is_active = models.BooleanField(default=True)
    code = models.CharField(max_length=6, unique=True)
    players = models.ManyToManyField(Player, related_name='games')
    is_active = models.BooleanField(default=True)
    impostor = models.ForeignKey(Player, related_name='impostor_games', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.code

class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    is_completed = models.BooleanField(default=False)
    assigned_to = models.ForeignKey(Player, related_name='tasks', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
