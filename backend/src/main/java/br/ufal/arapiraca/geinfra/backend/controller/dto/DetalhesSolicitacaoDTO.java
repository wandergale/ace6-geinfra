package br.ufal.arapiraca.geinfra.backend.controller.dto;

import java.time.LocalDateTime;

import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.model.StatusSolicitacaoEnum;

public class DetalhesSolicitacaoDTO {
    private Long id;
    private String nomeSolicitante;
    private String email;
    private String telefone;
    private String siape;
    private LocalDateTime dataSolicitacao;
    private String local;
    private String midia;
    private StatusSolicitacaoEnum status;
    private String descricao;
    private String servico;
    private Long unidade;
    private Long setor;
    private Long ordemServico;

    public DetalhesSolicitacaoDTO(Solicitacao solicitacao) {
        this.id = solicitacao.getId();
        this.nomeSolicitante = solicitacao.getNomeSolicitante();
        this.email = solicitacao.getEmail();
        this.telefone = solicitacao.getTelefone();
        this.siape = solicitacao.getSiape();
        this.dataSolicitacao = solicitacao.getDataSolicitacao();
        this.local = solicitacao.getLocal();
        this.midia = solicitacao.getMidia();
        this.status = solicitacao.getStatus();
        this.descricao = solicitacao.getDescricao();
        this.servico = solicitacao.getServico();
        this.unidade = solicitacao.getUnidade().getId();
        this.setor = solicitacao.getSetor().getId();
        if(solicitacao.getOrdemServico() != null){
            this.ordemServico = solicitacao.getOrdemServico().getId();
        }
    }

    public Long getId() {
        return id;
    }

    public String getNomeSolicitante() {
        return nomeSolicitante;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getSiape() {
        return siape;
    }

    public LocalDateTime getDataSolicitacao() {
        return dataSolicitacao;
    }

    public String getLocal() {
        return local;
    }

    public String getMidia() {
        return midia;
    }

    public StatusSolicitacaoEnum getStatus() {
        return status;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getServico() {
        return servico;
    }

    public Long getUnidade() {
        return unidade;
    }

    public Long getSetor() {
        return setor;
    }

    public Long getOrdemServico() {
        return ordemServico;
    }

    
}
