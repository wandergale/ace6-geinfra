package br.ufal.arapiraca.geinfra.backend.controller.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import br.ufal.arapiraca.geinfra.backend.model.Setor;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.model.Unidade;

public class SolicitacaoForm {

    @NotNull @NotEmpty @Length(min = 3)
    private String nomeSolicitante;
    @NotNull @NotEmpty 
    private String email;
    @NotNull @NotEmpty 
    private String telefone;
    @NotNull @NotEmpty 
    private String siape;
    @NotNull @NotEmpty 
    private String local;
    private String midia;
    @NotNull @NotEmpty @Length(min = 10)
    private String descricao;
    @NotNull @NotEmpty 
    private String servico;
    @NotNull @NotEmpty 
    private Integer unidade;
    @NotNull @NotEmpty 
    private Integer setor;

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
    public Integer getUnidade() {
        return unidade;
    }
    public void setUnidade(Integer unidade) {
        this.unidade = unidade;
    }
    public Integer getSetor() {
        return setor;
    }
    public void setSetor(Integer setor) {
        this.setor = setor;
    }

    public Solicitacao converter(){
        Unidade unidade = new Unidade();
        Setor setor = new Setor();
        return new Solicitacao(nomeSolicitante, email, telefone, siape, local, descricao, servico, unidade, setor);
    }
}
