from .views import *
from django.contrib import admin
from django.urls import path,include


urlpatterns = [
    path('', getRoutes, name= "getRoutes"),
    path('products/', getProducts, name= "getProducts")
]
