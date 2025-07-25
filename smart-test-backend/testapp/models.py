

from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=255)

    def __str__(self):
        return self.question_text

class Option(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.question.question_text} - {self.text}"


# from django.db import models

# class Question(models.Model):
#     DIFFICULTY_CHOICES = (
#         ('easy', 'Easy'),
#         ('medium', 'Medium'),
#         ('hard', 'Hard'),
#     )

#     subject = models.CharField(max_length=100)
#     question_text = models.TextField()
#     correct_answer = models.CharField(max_length=255)
#     difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
#     created_by = models.CharField(max_length=100)
#     correct_count = models.PositiveIntegerField(default=0)
#     incorrect_count = models.PositiveIntegerField(default=0)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.question_text

# class Option(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="options")
#     label = models.CharField(max_length=1)  # A, B, C, D
#     option_text = models.CharField(max_length=255)

#     def __str__(self):
#         return f"{self.label}. {self.option_text}"





# class Option(models.Model):
#     text = models.CharField(max_length=255)
#     is_correct = models.BooleanField(default=False)

#     def __str__(self):
#         return self.text


# class Option(models.Model):
#     question = models.ForeignKey('Question', on_delete=models.CASCADE, related_name="options")
#     label = models.CharField(max_length=1)  # A, B, C, D
#     option_text = models.CharField(max_length=255)

# class Question(models.Model):
#     DIFFICULTY_CHOICES = (
#         ('easy', 'Easy'),
#         ('medium', 'Medium'),
#         ('hard', 'Hard'),
#     )

#     subject = models.CharField(max_length=100)
#     question_text = models.TextField()
#     options = models.ManyToManyField(Option, related_name="question_options")
#     correct_answer = models.CharField(max_length=255)
#     difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
#     created_by = models.CharField(max_length=100)
#     correct_count = models.PositiveIntegerField(default=0)
#     incorrect_count = models.PositiveIntegerField(default=0)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.question_text


# from django.db import models
# from django.utils import timezone
# from django.contrib.auth.models import User

# DIFFICULTY_CHOICES = [
#         ('easy', 'Easy'),
#         ('medium', 'Medium'),
#         ('hard', 'Hard'),
#     ]

# class Question(models.Model):
#     # DIFFICULTY_CHOICES = [
#     #     ('easy', 'Easy'),
#     #     ('medium', 'Medium'),
#     #     ('hard', 'Hard'),
#     # ]

#     subject = models.CharField(max_length=200)
#     question_text = models.TextField()
#     option_list = models.JSONField(default=list)
#     correct_answer = models.CharField(max_length=255)
#     difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
#     created_by = models.ForeignKey(User, on_delete=models.CASCADE)
#     correct_count = models.PositiveIntegerField(default=0)
#     incorrect_count = models.PositiveIntegerField(default=0)
#     created_at = models.DateTimeField(auto_now_add=True)


#     def __str__(self):
#         return self.question_text


# class Option(models.Model):
#     question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
#     text = models.CharField(max_length=255)
#     is_correct = models.BooleanField(default=False)

#     def __str__(self):
#         return self.text


# # Create your models here.
# from django.db import models
# from django.contrib.auth.models import User

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="testapp_profile")
#     # user = models.OneToOneField(User, on_delete=models.CASCADE)
#     dob = models.DateField(null=True, blank=True)
#     gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
#     mobile = models.CharField(max_length=15)
#     profile_pic = models.ImageField(upload_to='profiles/', null=True, blank=True)

#     def __str__(self):
#         return self.user.username

# class Test(models.Model):
#     title = models.CharField(max_length=255)
#     duration_minutes = models.PositiveIntegerField()
#     total_marks = models.PositiveIntegerField()
#     description = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title

# class Question(models.Model):
#     test = models.ForeignKey(Test, on_delete=models.CASCADE)
#     question_text = models.TextField()
#     option_a = models.CharField(max_length=255)
#     option_b = models.CharField(max_length=255)
#     option_c = models.CharField(max_length=255)
#     option_d = models.CharField(max_length=255)
#     correct_answer = models.CharField(max_length=1)  # A/B/C/D

#     def __str__(self):
#         return self.text[:50]

# class TestAttempt(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     test = models.ForeignKey(Test, on_delete=models.CASCADE)
#     started_at = models.DateTimeField(auto_now_add=True)
#     completed_at = models.DateTimeField(null=True, blank=True)
#     score = models.FloatField(default=0)

# class Answer(models.Model):
#     attempt = models.ForeignKey(TestAttempt, on_delete=models.CASCADE)
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     selected_option = models.CharField(max_length=1)  # A/B/C/D

# class Result(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='testapp_results')
#     test = models.ForeignKey(Test, on_delete=models.CASCADE)
#     # score = models.IntegerField()
#     total_questions = models.IntegerField()
#     correct_answers = models.CharField(max_length=255, default="")
#     taken_on = models.DateTimeField(auto_now_add=True)

#     attempt = models.OneToOneField(TestAttempt, on_delete=models.CASCADE)
#     score = models.FloatField()
#     status = models.CharField(max_length=20, choices=[('Passed', 'Passed'), ('Failed', 'Failed')])
