from django.urls import path
from .views import QuestionListAPIView

urlpatterns = [
    path('questions/', QuestionListAPIView.as_view(), name='question-list'),
]

# from django.urls import path
# from .views import QuestionListAPIView

# urlpatterns = [
#     #path('api/questions/', QuestionListAPIView.as_view(), name='question-list'),
#     path('questions/', QuestionListAPIView.as_view(), name='question-list'),

# ]

