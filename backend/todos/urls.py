from django.urls import path
from .views import TodoDetail, ListTodo


urlpatterns = [
    path('', ListTodo.as_view(), name='todo_list'),
    path('<int:pk>/', TodoDetail.as_view(), name='todo_detail'),
]
