package br.ufal.arapiraca.geinfra.backend.controller.form;

import br.ufal.arapiraca.geinfra.backend.model.Setor;

public class AtualizaSetorForm {
    private String nome;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Setor converter(){
        return new Setor(nome);
    }

    public Setor atualizar(Long id, Setor setor) {
		setor.setNome(nome);
		return setor;
	}
}
