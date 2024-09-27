package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.form.SolicitacaoForm;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.repository.SetorRepository;
import br.ufal.arapiraca.geinfra.backend.repository.SolicitacaoRepository;
import br.ufal.arapiraca.geinfra.backend.repository.UnidadeRepository;

@RequestMapping("/solicitacoes")
public class SolicitacaoController {

    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

    @Autowired
    private UnidadeRepository unidadeRepository;

    @Autowired
    private SetorRepository setorRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<Solicitacao> cadastrar(@RequestBody @Valid SolicitacaoForm form, UriComponentsBuilder uriBuilder){
        Solicitacao solicitacao = form.converter(unidadeRepository, setorRepository);
        solicitacaoRepository.save(solicitacao);

        URI uri = uriBuilder.path("/solicitacoes/{id}").buildAndExpand(solicitacao.getId()).toUri();
        return ResponseEntity.created(uri).body(new Solicitacao());
    }
}
