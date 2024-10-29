package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.dto.OrdemServicoDTO;
import br.ufal.arapiraca.geinfra.backend.controller.form.AtualizaOrdemServicoForm;
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
    public ResponseEntity<OrdemServicoDTO> cadastrar(@RequestBody @Validated OrdemServicoForm form, UriComponentsBuilder uriBuilder){
        
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
        return ResponseEntity.created(uri).body(new OrdemServicoDTO(ordemServico));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdemServicoDTO> detalharSolicitacao(@PathVariable Long id) {
        Optional<OrdemServico> opt = ordemServicoRepository.findById(id);
        if(opt.isPresent()){
            return ResponseEntity.ok(new OrdemServicoDTO(opt.get()));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public List<OrdemServicoDTO> lista() {
        List<OrdemServico> lista = ordemServicoRepository.findAll();
        
        return OrdemServicoDTO.converter(lista);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<OrdemServicoDTO> atualizar(@PathVariable Long id, @RequestBody AtualizaOrdemServicoForm form){
        Solicitacao solicitacao = new Solicitacao();

        Optional<Solicitacao> sol = solicitacaoRepository.findById(form.getSolicitacao());
        if(sol.isPresent()){
            solicitacao = sol.get();       
        }else{
            return ResponseEntity.badRequest() .build();
        }
        
        Optional<OrdemServico> optional = ordemServicoRepository.findById(id);
		if(optional.isPresent()) {
			OrdemServico ordemServico = form.atualizar(optional.get(), solicitacao);
			return ResponseEntity.ok(new OrdemServicoDTO(ordemServico));
		}
		return ResponseEntity.notFound().build();
    }
}
