from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Solicitacao
from .serializers import SolicitacaoSerializer


# Rota simples de teste
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


# View para criar nova solicitação (POST)
class SolicitacaoCreateView(generics.CreateAPIView):
    queryset = Solicitacao.objects.all()
    serializer_class = SolicitacaoSerializer
    permission_classes = [AllowAny]  # Permite acesso sem autenticação


# View para listar solicitações (GET)
class SolicitacaoListView(generics.ListAPIView):
    queryset = Solicitacao.objects.all()
    serializer_class = SolicitacaoSerializer
    permission_classes = [AllowAny]