from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("solicitacoes/", views.SolicitacaoListCreateView.as_view(), name="solicitacoes"),
]
