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

import br.ufal.arapiraca.geinfra.backend.controller.form.OrdemServicoForm;
import br.ufal.arapiraca.geinfra.backend.model.OrdemServico;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.repository.OrdemServicoRepository;
import br.ufal.arapiraca.geinfra.backend.repository.SolicitacaoRepository;


@RestController
@RequestMapping("/ordem-servico")
public class OrdemServicoController {
    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<OrdemServico> cadastrar(@RequestBody @Validated OrdemServicoForm form, UriComponentsBuilder uriBuilder){
        
        Solicitacao solicitacao = new Solicitacao();

        Optional<Solicitacao> sol = solicitacaoRepository.findById(form.getSolicitacao());
        if(sol.isPresent()){
            solicitacao = sol.get();       
        }else{
            return ResponseEntity.badRequest() .build();
        }
        
        OrdemServico ordemServico = form.converter(solicitacao);
        ordemServicoRepository.save(ordemServico);

        URI uri = uriBuilder.path("ordem-servico").buildAndExpand(solicitacao.getId()).toUri();
        return ResponseEntity.created(uri).body(ordemServico);
    }
}
