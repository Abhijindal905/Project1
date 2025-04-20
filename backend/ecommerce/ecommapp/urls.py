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
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]
