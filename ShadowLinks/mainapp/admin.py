from django import forms
from django.contrib import admin
from .models import JavaScriptSnippet


class JavaScriptSnippetForm(forms.ModelForm):
    class Meta:
        model = JavaScriptSnippet
        fields = '__all__'
        widgets = {
            'script_content': forms.Textarea(attrs={'class': 'codemirror-editor'}),
        }


@admin.register(JavaScriptSnippet)
class JavaScriptSnippetAdmin(admin.ModelAdmin):
    form = JavaScriptSnippetForm

    class Media:
        css = {
            'all': ('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css',)
        }
        js = (
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/javascript/javascript.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/addon/edit/matchbrackets.min.js',
            'js/codemirror-init.js',  # Кастомный скрипт для инициализации
        )
