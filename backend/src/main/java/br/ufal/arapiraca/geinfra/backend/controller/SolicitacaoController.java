package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.form.SolicitacaoForm;
import br.ufal.arapiraca.geinfra.backend.model.Setor;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.model.Unidade;
import br.ufal.arapiraca.geinfra.backend.repository.SetorRepository;
import br.ufal.arapiraca.geinfra.backend.repository.SolicitacaoRepository;
import br.ufal.arapiraca.geinfra.backend.repository.UnidadeRepository;

@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {

    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

    @Autowired
    private UnidadeRepository unidadeRepository;

    @Autowired
    private SetorRepository setorRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<Solicitacao> cadastrar(@RequestBody @Validated SolicitacaoForm form, UriComponentsBuilder uriBuilder){
        Unidade unidade = new Unidade();
        Setor setor = new Setor();

        Optional<Unidade> uni = unidadeRepository.findById(form.getUnidade());
        if(uni.isPresent()){
            unidade = uni.get();       
        }else{
            System.out.println("Apareceu aqui");
            return ResponseEntity.badRequest().build();
        }

        Optional<Setor> set = setorRepository.findById(form.getSetor());
        if(set.isPresent()){
            setor = set.get();       
        }else{
            return ResponseEntity.badRequest().build();
        }

        Solicitacao solicitacao = form.converter(unidade, setor);
        solicitacaoRepository.save(solicitacao);

        URI uri = uriBuilder.path("/solicitacao/{id}").buildAndExpand(solicitacao.getId()).toUri();
        return ResponseEntity.created(uri).body(solicitacao);
    }
}
