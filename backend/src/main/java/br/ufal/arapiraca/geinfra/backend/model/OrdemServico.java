package br.ufal.arapiraca.geinfra.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class OrdemServico {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numeroOrdem;
    private String tag;
    private LocalDateTime dataAbertura = LocalDateTime.now();
    private String equipamento;
    private LocalDateTime inicioServico;
    private LocalDateTime terminoServico;
    private String descricaoServicoExecutado;
    private StatusOrdemEnum Status = StatusOrdemEnum.ORDEM_GERADA;
    private String materialUtilizado;
    private String executante;
    private String responsavel;
    private TipoManutencaoEnum tipoManutencao;
    @OneToOne
    private Solicitacao solicitacao;
    
    public OrdemServico(){
        
    }
    
    public OrdemServico(String numeroOrdem, String tag, String equipamento, LocalDateTime inicioServico,
            LocalDateTime terminoServico, String descricaoServicoExecutado, String materialUtilizado, String executante,
            String responsavel, TipoManutencaoEnum tipoManutencao, Solicitacao solicitacao) {
        this.numeroOrdem = numeroOrdem;
        this.tag = tag;
        this.equipamento = equipamento;
        this.inicioServico = inicioServico;
        this.terminoServico = terminoServico;
        this.descricaoServicoExecutado = descricaoServicoExecutado;
        this.materialUtilizado = materialUtilizado;
        this.executante = executante;
        this.responsavel = responsavel;
        this.tipoManutencao = tipoManutencao;
        this.solicitacao = solicitacao;
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
        OrdemServico other = (OrdemServico) obj;
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
    public LocalDateTime getDataAbertura() {
        return dataAbertura;
    }
    public void setDataAbertura(LocalDateTime dataAbertura) {
        this.dataAbertura = dataAbertura;
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
    public StatusOrdemEnum getStatus() {
        return Status;
    }
    public void setStatus(StatusOrdemEnum status) {
        Status = status;
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
    public TipoManutencaoEnum getTipoManutencao() {
        return tipoManutencao;
    }
    public void setTipoManutencao(TipoManutencaoEnum tipoManutencao) {
        this.tipoManutencao = tipoManutencao;
    }
    public Solicitacao getSolicitacao() {
        return solicitacao;
    }
    public void setSolicitacao(Solicitacao solicitacao) {
        this.solicitacao = solicitacao;
    }    
    
}
