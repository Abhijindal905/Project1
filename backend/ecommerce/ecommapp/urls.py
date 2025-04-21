from .views import *
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('', getRoutes, name= "getRoutes"),
    path('products/', getProducts, name= "getProducts"),
    path('product/<str:id>', getProduct, name="getProduct"),
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', getUserProfiles, name='getUserProfiles'),
    path('users/', getUsers, name="getUsers")
]
