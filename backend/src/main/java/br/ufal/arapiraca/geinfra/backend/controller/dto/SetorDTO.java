package br.ufal.arapiraca.geinfra.backend.controller.dto;
import java.util.List;

import br.ufal.arapiraca.geinfra.backend.model.Setor;
import java.util.stream.Collectors;

public class SetorDTO {
    private Long id;
    private String nome;

    public SetorDTO(Setor setor) {
        this.id = setor.getId();
        this.nome = setor.getNome();
    }

    public Long getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }

    public static List<SetorDTO> converter(List<Setor> lista){
        return lista.stream().map(SetorDTO::new).collect(Collectors.toList());
    }    
}
