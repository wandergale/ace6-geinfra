package br.ufal.arapiraca.geinfra.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Solicitacao {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeSolicitante;
    private String email;
    private String telefone;
    private String siape;
    private LocalDateTime dataSolicitacao = LocalDateTime.now();
    private String local;
    private String midia;
    private StatusSolicitacaoEnum status = StatusSolicitacaoEnum.ENVIADA;
    private String descricao;
    private String servico;
    @ManyToOne
    private Unidade unidade;
    @ManyToOne
    private Setor setor;
    @OneToOne(mappedBy = "solicitacao", cascade = CascadeType.REMOVE)
    private OrdemServico ordemServico;

    public Solicitacao(){

    }


    public Solicitacao(String nomeSolicitante, String email, String telefone, String siape, String local,
            String descricao, String servico, Unidade unidade, Setor setor) {
        this.nomeSolicitante = nomeSolicitante;
        this.email = email;
        this.telefone = telefone;
        this.siape = siape;
        this.local = local;
        this.descricao = descricao;
        this.servico = servico;
        this.unidade = unidade;
        this.setor = setor;
    }
    public Solicitacao(String nomeSolicitante, String email, String telefone, String siape, String local,
            String descricao, String servico) {
        this.nomeSolicitante = nomeSolicitante;
        this.email = email;
        this.telefone = telefone;
        this.siape = siape;
        this.local = local;
        this.descricao = descricao;
        this.servico = servico;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Solicitacao other = (Solicitacao) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeSolicitante() {
        return nomeSolicitante;
    }

    public void setNomeSolicitante(String nomeSolicitante) {
        this.nomeSolicitante = nomeSolicitante;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getSiape() {
        return siape;
    }

    public void setSiape(String siape) {
        this.siape = siape;
    }

    public LocalDateTime getDataSolicitacao() {
        return dataSolicitacao;
    }

    public void setDataSolicitacao(LocalDateTime dataSolicitacao) {
        this.dataSolicitacao = dataSolicitacao;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getMidia() {
        return midia;
    }

    public void setMidia(String midia) {
        this.midia = midia;
    }

    public StatusSolicitacaoEnum getStatus() {
        return status;
    }

    public void setStatus(StatusSolicitacaoEnum status) {
        this.status = status;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getServico() {
        return servico;
    }

    public void setServico(String servico) {
        this.servico = servico;
    }

    public Unidade getUnidade() {
        return unidade;
    }

    public void setUnidade(Unidade unidade) {
        this.unidade = unidade;
    }

    public Setor getSetor() {
        return setor;
    }

    public void setSetor(Setor setor) {
        this.setor = setor;
    }

    public OrdemServico getOrdemServico() {
        return ordemServico;
    }

    public void setOrdemServico(OrdemServico ordemServico) {
        this.ordemServico = ordemServico;
    }

}
