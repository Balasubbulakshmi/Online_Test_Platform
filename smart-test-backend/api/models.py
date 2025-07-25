from django.db import models
from django.contrib.auth.models import User  # Import the built-in User model

class Question(models.Model):
    DIFFICULTY_LEVELS = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    subject = models.CharField(max_length=100)
    question_text = models.TextField()
    options = models.JSONField()
    correct_answer = models.CharField(max_length=1)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_LEVELS, default='medium')
    correct_count = models.IntegerField(default=0)
    incorrect_count = models.IntegerField(default=0)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.question_text






# //THIS IS FINAL CRT ONE
# # api/models.py
# from django.db import models
# from django.utils import timezone

# class Test(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField(blank=True)
#     date_created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title


# class Question(models.Model):
#     question_text = models.CharField(max_length=255)
#     option_1 = models.CharField(max_length=100)
#     option_2 = models.CharField(max_length=100)
#     option_3 = models.CharField(max_length=100)
#     option_4 = models.CharField(max_length=100)
#     correct_answer = models.CharField(max_length=100)
#     test = models.ForeignKey(Test, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.question_text

# class Option(models.Model):
#     question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
#     text = models.CharField(max_length=255)
#     is_correct = models.BooleanField(default=False)

#     def __str__(self):
#         return self.text

# class Result(models.Model):
#     taken_on = models.DateTimeField(default=timezone.now)
    
#     def __str__(self):
#         return f"Result taken on {self.taken_on}"

       