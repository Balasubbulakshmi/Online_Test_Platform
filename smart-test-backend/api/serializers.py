from rest_framework import serializers
from .models import Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'





# serializers.py
## // FINAL CORRECT ONE
# from rest_framework import serializers
# from .models import Question, Option

# class OptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Option
#         fields = ['id', 'text', 'is_correct']  # Ensure these are correct

# class QuestionSerializer(serializers.ModelSerializer):
#     options = OptionSerializer(many=True, read_only=True)

#     class Meta:
#         model = Question
#         fields = ['id', 'text', 'options']  # ⬅️ Make sure 'text' is included here!




# //THIS IS ALSO CORRECT PART

# from rest_framework import serializers
# from .models import Question, Option

# class OptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Option
#         fields = ['id', 'text', 'is_correct']

# class QuestionSerializer(serializers.ModelSerializer):
#     options = OptionSerializer(many=True, read_only=True)

#     class Meta:
#         model = Question
#         fields = ['id', 'text', 'options']





# from rest_framework import serializers
# from .models import UserProfile, Question, Result

# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = '__all__'

# class QuestionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Question
#         fields = '__all__'

# class ResultSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Result
#         fields = '__all__'
