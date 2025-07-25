# api/views/test_views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Question
from ..serializers import QuestionSerializer

@api_view(['GET'])
def get_questions(request):
    questions = Question.objects.prefetch_related('options').all()
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)




# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# @api_view(['GET'])
# def start_test(request):
#     # Sample Test Start (return questions here)
#     questions = [
#         {"id": 1, "text": "What is 2 + 2?", "options": ["3", "4", "5"]},
#         {"id": 2, "text": "What is the capital of India?", "options": ["Delhi", "Mumbai", "Chennai"]}
#     ]
#     return Response({'questions': questions})

# @api_view(['POST'])
# def submit_test(request):
#     answers = request.data.get('answers')
#     # Process answers here
#     return Response({'message': 'Test Submitted', 'answers': answers})
