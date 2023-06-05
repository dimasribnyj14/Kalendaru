from django.shortcuts import render, redirect
from Kalendaruapp.models import *
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login, logout
from datetime import date
from django.contrib.auth.models import User
from django.db import IntegrityError
def sign_in(request):
    context = {}
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username = username, password = password)
        if user != None:
            
            login(request, user)
            context["error_text"] = ""
        else:
            context["error_text"] = "Сталася помилка! Пошта або пароль не співпадають!"
    return render(request, "signin.html", context)

def sign_up(request):
    context={}
    if request.method == 'POST':
        nickname = request.POST.get('nickname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        context={
            'nickname':nickname,
            'email':email,
            'password':password,
        }
        try:
            User.objects.create_user(username = nickname, email=email, password=password)
            context["error_text"] = ""
            return redirect('login')
        except IntegrityError:
            context['error_text'] = 'Сталася помилка! Такі дані користувача вже існує!'
        except:
            context['error_text'] = 'Сталася помилка! Спробуйте ще раз!'
    return render(request, "signup.html",context)

def support(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        text = request.POST.get('message')
        message = f"{text}. Для зв'язка з {name} є {email}"
        send_mail(name, message, 'settings.EMAIL_HOST_USER', ['kalendaruhelp@gmail.com'], fail_silently=False)
        
        
    return render(request, "support.html")

def options(request):
    if request.method == "POST":
        logout(request)
        return redirect('login')
    return render(request, "options.html")

def notes(request):
    return render(request, "notes.html")

def profile(request):
    return render(request, "profile.html")

def tasks(request):
    return render(request, "tasks.html")

def calendar(request):
    return render(request, "calendar.html")