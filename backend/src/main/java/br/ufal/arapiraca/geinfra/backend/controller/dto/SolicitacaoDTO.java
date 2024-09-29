package br.ufal.arapiraca.geinfra.backend.controller.dto;

import java.time.LocalDateTime;

import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.model.StatusSolicitacaoEnum;

public class SolicitacaoDTO {
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
    
    public SolicitacaoDTO(Solicitacao solicitacao){
        this.id = solicitacao.getId();
        
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

    
}
