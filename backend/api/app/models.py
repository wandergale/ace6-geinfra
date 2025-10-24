from django.db import models

class Solicitacao(models.Model):
    nome_solicitante = models.CharField(max_length=100)
    setor_solicitante = models.CharField(max_length=100)
    unidade = models.CharField(max_length=100)
    local_servico = models.CharField(max_length=100)
    data_solicitacao = models.DateTimeField(auto_now_add=True)

    tipo_servico = models.CharField(
        max_length=50,
        choices=[
            ('Elétrico', 'Elétrico'),
            ('Hidráulico', 'Hidráulico'),
            ('Refrigeração', 'Refrigeração'),
            ('Pintura', 'Pintura'),
            ('Outro', 'Outro')
        ]
    )
    outro_servico = models.CharField(max_length=100, blank=True, null=True)

    tipo_manutencao = models.CharField(
        max_length=50,
        choices=[
            ('Corretiva', 'Corretiva'),
            ('Preventiva', 'Preventiva'),
            ('Melhoria', 'Melhoria')
        ]
    )

    descricao_problema = models.TextField()

    def __str__(self):
        return f"{self.nome_solicitante} - {self.tipo_servico} - {self.local_servico}"
