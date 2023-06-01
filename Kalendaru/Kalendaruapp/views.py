from django.shortcuts import render
# sign_in
def sign_in(request):
    return render(request, "signin.html")
# Create your views here.
def sign_up(request):
    return render(request, "singup.html")