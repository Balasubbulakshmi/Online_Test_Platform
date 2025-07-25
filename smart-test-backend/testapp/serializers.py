from rest_framework import serializers
from .models import Question, Option

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'text', 'is_correct']

class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'question_text', 'options']


# from rest_framework import serializers
# from .models import Question, Option

# class OptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Option
#         fields = ['label', 'option_text']

# class QuestionSerializer(serializers.ModelSerializer):
#     options = OptionSerializer(many=True, read_only=True)

#     class Meta:
#         model = Question
#         fields = ['id', 'subject', 'question_text', 'options', 'correct_answer', 'difficulty', 'created_by', 'correct_count', 'incorrect_count', 'created_at']


