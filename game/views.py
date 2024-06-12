from django.shortcuts import render

from django.http import JsonResponse

# Create your views here.
from rest_framework import viewsets
from .models import Player, GameSession, Task
from .serializers import PlayerSerializer, GameSessionSerializer, TaskSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class GameSessionViewSet(viewsets.ModelViewSet):
    queryset = GameSession.objects.all()
    serializer_class = GameSessionSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

def get_players(request):
    players = [{'username': player.username, 'avatar': player.avatar} for player in Player.objects.all()]
    return JsonResponse({'players': players})