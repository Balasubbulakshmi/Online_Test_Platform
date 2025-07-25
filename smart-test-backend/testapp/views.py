from rest_framework import generics
from .models import Question
from .serializers import QuestionSerializer

class QuestionListAPIView(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer



# from django.shortcuts import render

# # Create your views here.
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import Question
# from .serializers import QuestionSerializer

# @api_view(['GET'])
# def get_questions(request):
#     questions = Question.objects.all()
#     serializer = QuestionSerializer(questions, many=True)
#     return Response(serializer.data)


