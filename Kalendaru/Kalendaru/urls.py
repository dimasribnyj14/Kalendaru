"""Kalendaru URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Kalendaruapp.views import *
from .settings import *
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('login',sign_in, name='login'),
    path("register", sign_up, name='register'),
    path('support',support, name='support'),
    path('options',options, name='options'),
    path('',kalendaru, name='calendar'),
    path('tasks',tasks, name='tasks'),
    path('profile',profile, name='profile'),
    path('notes',notes, name='notes'),
    path('error',error,name='error')
]
if DEBUG:
    urlpatterns += static(MEDIA_URL, document_root = MEDIA_ROOT)