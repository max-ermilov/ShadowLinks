from django.shortcuts import render
from .models import JavaScriptSnippet


def index(request):
    scripts = JavaScriptSnippet.objects.filter(is_published=True)
    return render(request, 'mainapp/index.html', {'scripts': scripts})
