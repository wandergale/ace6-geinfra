package br.ufal.arapiraca.geinfra.backend.controller.dto;

import java.util.List;
import java.util.stream.Collectors;
import br.ufal.arapiraca.geinfra.backend.model.Unidade;

public class UnidadeDTO {
 private Long id;
    private String nome;

    public UnidadeDTO(Unidade unidade) {
        this.id = unidade.getId();
        this.nome = unidade.getNome();
    }

    public Long getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }

    public static List<UnidadeDTO> converter(List<Unidade> lista){
        return lista.stream().map(UnidadeDTO::new).collect(Collectors.toList());
    }    
}
