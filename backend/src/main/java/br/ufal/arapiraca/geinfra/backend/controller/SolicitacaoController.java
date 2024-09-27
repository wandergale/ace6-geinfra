package br.ufal.arapiraca.geinfra.backend.controller;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.form.SolicitacaoForm;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;

@RequestMapping("/solicitacao")
public class SolicitacaoController {

    public Solicitacao cadastrar(@RequestBody @Valid SolicitacaoForm solicitacaoForm, UriComponentsBuilder uriBuilder){
        return new Solicitacao();
    }
}
