from django.urls import path
from django.urls import include, path
from django.contrib import admin

urlpatterns = [
    path("solicitacoes/", include("app.urls"), name="solicitacoes"),
    path("admin/", admin.site.urls )
]