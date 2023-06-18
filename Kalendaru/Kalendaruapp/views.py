from django.shortcuts import render, redirect
from Kalendaruapp.models import *
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from datetime import date
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth.hashers import check_password
import os
def sign_in(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
        }
        return redirect('calendar')
    else:
        context={}
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username = username, password = password)
        if user != None:
            if User.objects.get(username=username).is_active == False:
                context["error_text"] = "Виникла помилка! Цей обліковий запис був вимкнений!"
            else:
                login(request, user)
                context["error_text"] = ""
                return redirect('calendar')
        else:
            context["error_text"] = "Виникла помилка! Пошта або пароль не співпадають!"
        
    return render(request, "signin.html", context)

def sign_up(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
        }
        return redirect('calendar')
    else:
        context={}
    if request.method == 'POST':
        nickname = request.POST.get('nickname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        avatar = None
        context={
            'nickname':nickname,
            'email':email,
            'password':password,
            # 'users':User.objects.all()
        }
        try:
            # if context['users']
            User.objects.create_user(username = nickname, email=email, password=password)
            UserProfile.objects.create(user=User.objects.last(),avatar=avatar)
            context["error_text"] = ""
            return redirect('login')
        except IntegrityError:
            context['error_text'] = 'Виникла помилка! Такі дані користувача вже існує!'
        except:
            context['error_text'] = 'Виникла помилка! Спробуйте ще раз!'
    return render(request, "signup.html",context)

def support(request):

    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
        }
    else:
        context={}
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        text = request.POST.get('message')
        message = f"{text}. Для зв'язка з {name} є {email}"
        send_to_user = f'Добридень, {name}! \nПрийшло поки що автоматичне повідомлення і модерація на даний момент аналізує ваше повідомлення. \nПротягом кількох годин дадуть відповідь.'
        send_mail('Kalendaru Team', send_to_user, 'settings.EMAIL_HOST_USER', [email],fail_silently=False)
        send_mail(name, message, 'settings.EMAIL_HOST_USER', ['kalendaruhelp@gmail.com'], fail_silently=False)
        
        
    return render(request, "support.html",context) #,context

def options(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
        }
    else:
        context={}
    
    if request.method == "POST":
        if request.POST.get('logout') != None:
            logout(request)
            return redirect('login')  
        elif request.POST.get('delete_user') != None:
            if check_password(request.POST.get('passwordModalDelete'), request.user.password):
                if not request.user.is_superuser:
                    user = User.objects.get(username=request.user.username)
                    send_mail('Kalendaru Team', "Ваш обліковий запис був вимкнений. \nУ вас є 30 днів, щоб повернути обліковий запис, інакше ваш обліковий запис буде повністю видалений. \nЯкщо ви бажаєте відновити обліковий запис, будь ласка, напишіть на пошту дані від вашого облікового запису Kalendaru. \n(Обов'язково: Ім'я користувача)", 'settings.EMAIL_HOST_USER', [request.user.email],fail_silently=False)
                    logout(request)
                    user.is_active = False
                    user.save()
                    return redirect('login')
                else:
                    context['error_text'] = 'Виникла помилка! Ви не можете вимкнути супер користувача!'
            else:
                context['error_text'] = 'Виникла помилка! Пароль неправильний!'
        elif request.FILES.get('change_avatar') != None:
            print(request.FILES.get('change_avatar'))
            avatar = UserProfile.objects.get(user=request.user.pk)
            avatar.avatar = request.FILES.get('change_avatar')
            avatar.save()
        elif request.POST.get("change_password") != None:
            if check_password(request.POST.get('passwordModalOld'), request.user.password):
                new = request.POST.get('passwordModalNew')
                # user = User.objects.get(username=request.user.username)
                # user.password = new
                # user.save()
                request.user.set_password(new)
                request.user.save()
                update_session_auth_hash(request, request.user) 
                # form = PasswordChangeForm(request.user, request.POST)
                # if form.is_valid():
                #     user = form.save()
                return redirect('options')
            else:
                context['error_text'] = 'Виникла помилка! Пароль неправильний!'
        else:
            print(request.POST)
        
        
    return render(request, "options.html",context)

def notes(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
            'notes':Notes.objects.filter(user_join_id=request.user.pk)
        }
    else:
        context={
            'notes':Notes.objects.filter(user_join_id=request.user.pk)
        }
    if request.method == "POST":
        if request.POST.get('pknote') != None:
            note_pk = request.POST.get('pknote')
            note = Notes.objects.get(pk=note_pk)
            note.delete()
            redirect('notes')
        else:
            print(request.POST.get('remove'))
            name = request.POST.get('name')
            event = request.POST.get('event')
            description = request.POST.get('description')
            date = request.POST.get('date')
            try:
                Notes.objects.create(name=name,action=event,description=description,date_added=date,user_join=request.user)
            except:
                return redirect('notes')
        return redirect('notes')
    return render(request, "notes.html",context)

def profile(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
            'notes':Notes.objects.filter(user_join_id=request.user.pk),
            'tasks':Tasks.objects.filter(user_join_id=request.user.pk)
        }
    else:
        context={
            'notes':Notes.objects.filter(user_join_id=request.user.pk),
            'tasks':Tasks.objects.filter(user_join_id=request.user.pk)
        }
    return render(request, "profile.html",context)

def tasks(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
            'tasks':Tasks.objects.filter(user_join_id=request.user.pk)
        }
    else:
        context={
            'tasks':Tasks.objects.filter(user_join_id=request.user.pk)
        }
    if request.method == "POST":
        if request.POST.get("name") != None:
            name = request.POST.get('name')
            event = request.POST.get('event')
            description = request.POST.get('description')
            date = request.POST.get('date')
            try:
                Tasks.objects.create(name=name,action=event,description=description,date_added=date,user_join=request.user,hascompleted=False)
            except:
                return redirect('tasks')
            return redirect('tasks')
        elif request.POST.get("completed") != None:
            task_pk = request.POST.get('completed')
            task = Tasks.objects.get(pk=task_pk)
            task.hascompleted = True
            task.save()
            redirect('tasks')
        elif request.POST.get('removeTask') != None:
            task_pk = request.POST.get('removeTask')
            task = Tasks.objects.get(pk=task_pk)
            task.delete()
            redirect('tasks')
    return render(request, "tasks.html",context)

def calendar(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
            'tasks':Tasks.objects.filter(user_join_id=request.user.pk),
            'notes':Notes.objects.filter(user_join_id=request.user.pk),
            'actions':Actions.objects.all()
        }
    else:
        context={
            'actions':Actions.objects.all()
        }
    if request.method == 'POST':
        if request.POST.get('make-completed') != None:
            pkTask = request.POST.get('pkForm')
            task = Tasks.objects.get(pk=pkTask)
            task.hascompleted = True
            task.save()
        elif request.POST.get('remove') != None:
            pkObject = request.POST.get('pkForm')
            classObject = request.POST.get('taskornote')
            if classObject == "task-info":
                task = Tasks.objects.get(pk=pkObject)
                task.delete()
            elif classObject == "note-info":
                note = Notes.objects.get(pk=pkObject)
                note.delete()
            else:
                print(classObject)
    return render(request, "calendar.html",context)

def error(request):
    if request.user.is_authenticated:
        context = {
            'avatar':UserProfile.objects.get(user=request.user.pk),
        }
    else:
        context={}
    return render(request,'error.html',context)