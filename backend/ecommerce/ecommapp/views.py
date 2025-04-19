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

@api_view(['GET'])
def getProduct(request, id):
    product = Products.objects.get(_id=id)
    serializer = ProductsSerializer(product, many=False)
    return Response(serializer.data)
