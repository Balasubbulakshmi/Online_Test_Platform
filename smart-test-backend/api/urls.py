from django.urls import path
from .views import QuestionListAPIView

urlpatterns = [
    path('questions/', QuestionListAPIView.as_view(), name='question-list'),
    
]





## // THIS IS FINAL ONE

# from rest_framework import routers
# from api.views import QuestionViewSet

# router = routers.DefaultRouter()
# router.register(r'questions', QuestionViewSet)

# urlpatterns = router.urls

#-------------------------------------

# from django.urls import path
# from . import views
# from .views import auth_views, user_views, test_views, admin_views

# urlpatterns = [
#     path('', views.home_view),
#     path('register/', auth_views.register_view),
#     path('login/', auth_views.login_view),
#     path('profile/', user_views.profile_view),
#     path('test/start/', test_views.start_test),
#     path('test/submit/', test_views.submit_test),
#     path('admin/manage-questions/', admin_views.manage_questions),
# ]



