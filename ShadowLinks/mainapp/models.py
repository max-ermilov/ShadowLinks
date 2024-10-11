from django.db import models


class JavaScriptSnippet(models.Model):
    name = models.CharField(max_length=100, unique=True)
    script_content = models.TextField()  # Хранит содержимое JS-кода
    is_published = models.BooleanField(default=False)  # Флаг публикации скрипта

    def __str__(self):
        return self.name
