package br.ufal.arapiraca.geinfra.backend.controller.dto;

import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.List;
import br.ufal.arapiraca.geinfra.backend.model.OrdemServico;
import br.ufal.arapiraca.geinfra.backend.model.StatusOrdemEnum;
import br.ufal.arapiraca.geinfra.backend.model.TipoManutencaoEnum;

public class OrdemServicoDTO {
    private Long id;
    private String numeroOrdem;
    private String tag;
    private LocalDateTime dataAbertura;
    private String equipamento;
    private LocalDateTime inicioServico;
    private LocalDateTime terminoServico;
    private String descricaoServicoExecutado;
    private StatusOrdemEnum status;
    private String materialUtilizado;
    private String executante;
    private String responsavel;
    private TipoManutencaoEnum tipoManutencao;
    private Long solicitacao;
    
    public OrdemServicoDTO(OrdemServico ordemServico) {
        this.id = ordemServico.getId();
        this.numeroOrdem = ordemServico.getNumeroOrdem();
        this.tag = ordemServico.getTag();
        this.dataAbertura = ordemServico.getDataAbertura();
        this.equipamento = ordemServico.getEquipamento();
        this.inicioServico = ordemServico.getInicioServico();
        this.terminoServico = ordemServico.getTerminoServico();
        this.descricaoServicoExecutado = ordemServico.getDescricaoServicoExecutado();
        this.status = ordemServico.getStatus();
        this.materialUtilizado = ordemServico.getMaterialUtilizado();
        this.executante = ordemServico.getExecutante();
        this.responsavel = ordemServico.getResponsavel();
        this.tipoManutencao = ordemServico.getTipoManutencao();
        this.solicitacao = ordemServico.getSolicitacao().getId();
    }
    public Long getId() {
        return id;
    }
    public String getNumeroOrdem() {
        return numeroOrdem;
    }
    public String getTag() {
        return tag;
    }
    public LocalDateTime getDataAbertura() {
        return dataAbertura;
    }
    public String getEquipamento() {
        return equipamento;
    }
    public LocalDateTime getInicioServico() {
        return inicioServico;
    }
    public LocalDateTime getTerminoServico() {
        return terminoServico;
    }
    public String getDescricaoServicoExecutado() {
        return descricaoServicoExecutado;
    }
    public StatusOrdemEnum getStatus() {
        return this.status;
    }
    public String getMaterialUtilizado() {
        return materialUtilizado;
    }
    public String getExecutante() {
        return executante;
    }
    public String getResponsavel() {
        return responsavel;
    }
    public TipoManutencaoEnum getTipoManutencao() {
        return tipoManutencao;
    }
    public Long getSolicitacao() {
        return solicitacao;
    }

    public static List<OrdemServicoDTO> converter(List<OrdemServico> lista){
        return lista.stream().map(OrdemServicoDTO::new).collect(Collectors.toList());
    }
}
