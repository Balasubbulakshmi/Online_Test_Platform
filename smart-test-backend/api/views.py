from rest_framework import generics
from .models import Question
from .serializers import QuestionSerializer

class QuestionListAPIView(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer





## // THIS IS FINAL ONE

# from rest_framework import viewsets
# from .models import Question
# from .serializers import QuestionSerializer

# class QuestionViewSet(viewsets.ModelViewSet):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer

