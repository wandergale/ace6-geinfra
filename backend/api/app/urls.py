from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("solicitacoes/", views.SolicitacaoCreateView.as_view(), name="criar-solicitacao"),
    path("solicitacoes/listar/", views.SolicitacaoListView.as_view(), name="listar-solicitacoes"),
]
