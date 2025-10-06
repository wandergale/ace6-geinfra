from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Solicitacao
from .serializers import SolicitacaoSerializer


# Rota simples de teste
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


# View para listar (GET) e criar (POST) solicitações
class SolicitacaoListCreateView(generics.ListCreateAPIView):
    queryset = Solicitacao.objects.all().order_by('-id')  # Ordena por ID decrescente (mais recentes primeiro)
    serializer_class = SolicitacaoSerializer
    permission_classes = [AllowAny]  # Permite acesso sem autenticação