from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlayerViewSet, GameSessionViewSet, TaskViewSet
from . import views

router = DefaultRouter()
router.register(r'players', PlayerViewSet)
router.register(r'gamesessions', GameSessionViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    # Add any additional paths here if needed
]
