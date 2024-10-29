package br.ufal.arapiraca.geinfra.backend.controller.form;

import java.time.LocalDateTime;

import br.ufal.arapiraca.geinfra.backend.model.OrdemServico;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.model.TipoManutencaoEnum;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class AtualizaOrdemServicoForm {
    @NotNull @NotEmpty
    private String numeroOrdem;
    @NotNull @NotEmpty
    private String tag;
    private String equipamento;
    private LocalDateTime inicioServico;
    private LocalDateTime terminoServico;
    private String descricaoServicoExecutado;
    private String materialUtilizado;
    private String executante;
    private String responsavel;
    @NotNull 
    private int tipoManutencao;
    @NotNull 
    private Long solicitacao;

    public String getNumeroOrdem() {
        return numeroOrdem;
    }
    public void setNumeroOrdem(String numeroOrdem) {
        this.numeroOrdem = numeroOrdem;
    }
    public String getTag() {
        return tag;
    }
    public void setTag(String tag) {
        this.tag = tag;
    }
    public String getEquipamento() {
        return equipamento;
    }
    public void setEquipamento(String equipamento) {
        this.equipamento = equipamento;
    }
    public LocalDateTime getInicioServico() {
        return inicioServico;
    }
    public void setInicioServico(LocalDateTime inicioServico) {
        this.inicioServico = inicioServico;
    }
    public LocalDateTime getTerminoServico() {
        return terminoServico;
    }
    public void setTerminoServico(LocalDateTime terminoServico) {
        this.terminoServico = terminoServico;
    }
    public String getDescricaoServicoExecutado() {
        return descricaoServicoExecutado;
    }
    public void setDescricaoServicoExecutado(String descricaoServicoExecutado) {
        this.descricaoServicoExecutado = descricaoServicoExecutado;
    }
    public String getMaterialUtilizado() {
        return materialUtilizado;
    }
    public void setMaterialUtilizado(String materialUtilizado) {
        this.materialUtilizado = materialUtilizado;
    }
    public String getExecutante() {
        return executante;
    }
    public void setExecutante(String executante) {
        this.executante = executante;
    }
    public String getResponsavel() {
        return responsavel;
    }
    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }
    public int getTipoManutencao() {
        return tipoManutencao;
    }
    public void setTipoManutencao(int tipoManutencao) {
        this.tipoManutencao = tipoManutencao;
    }
    public Long getSolicitacao() {
        return solicitacao;
    }
    public void setSolicitacao(Long solicitacao) {
        this.solicitacao = solicitacao;
    }

    public OrdemServico converter(Solicitacao solicitacao){
        return new OrdemServico(
            numeroOrdem, 
            tag, 
            equipamento, 
            inicioServico, 
            terminoServico, 
            descricaoServicoExecutado, 
            materialUtilizado, 
            executante, 
            responsavel, 
            TipoManutencaoEnum.values()[tipoManutencao] , 
            solicitacao);
    }

    public OrdemServico atualizar(OrdemServico ordemServico, Solicitacao solicitacao){
        ordemServico.setNumeroOrdem(numeroOrdem);
        ordemServico.setTag(tag);
        ordemServico.setEquipamento(equipamento);
        ordemServico.setInicioServico(inicioServico);
        ordemServico.setTerminoServico(terminoServico);
        ordemServico.setDescricaoServicoExecutado(descricaoServicoExecutado);
        ordemServico.setMaterialUtilizado(materialUtilizado);
        ordemServico.setExecutante(executante);
        ordemServico.setResponsavel(responsavel);
        ordemServico.setResponsavel(responsavel);
        ordemServico.setTipoManutencao(TipoManutencaoEnum.values()[tipoManutencao]);        
        ordemServico.setSolicitacao(solicitacao);
        return ordemServico;
    }
}
