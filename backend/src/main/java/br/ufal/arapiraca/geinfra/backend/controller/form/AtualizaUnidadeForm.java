package br.ufal.arapiraca.geinfra.backend.controller.form;

import br.ufal.arapiraca.geinfra.backend.model.Unidade;

public class AtualizaUnidadeForm {
    private String nome;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Unidade converter(){
        return new Unidade(nome);
    }

    public Unidade atualizar(Unidade unidade) {
		unidade.setNome(nome);
		return unidade;
	}
}
