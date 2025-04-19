from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Products
from .serializers import ProductsSerializer 
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('is a data field')


@api_view(['GET'])
def getProducts(request):
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many = True)
    return Response(serializer.data)