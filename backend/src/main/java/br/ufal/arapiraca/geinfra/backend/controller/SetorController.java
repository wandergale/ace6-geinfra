package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.dto.SetorDTO;
import br.ufal.arapiraca.geinfra.backend.controller.form.AtualizaSetorForm;
import br.ufal.arapiraca.geinfra.backend.controller.form.SetorForm;
import br.ufal.arapiraca.geinfra.backend.model.Setor;
import br.ufal.arapiraca.geinfra.backend.repository.SetorRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/setor")
public class SetorController {

    @Autowired
    private SetorRepository setorRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<Setor> cadastrar(@RequestBody @Valid SetorForm form, UriComponentsBuilder uriBuilder){
        Setor setor = form.converter();
        setorRepository.save(setor);

        URI uri = uriBuilder.path("/setor/{id}").buildAndExpand(setor.getId()).toUri();
        return ResponseEntity.created(uri).body(setor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SetorDTO> detalharSolicitacao(@PathVariable Long id) {
        Optional<Setor> opt = setorRepository.findById(id);
        if(opt.isPresent()){
            return ResponseEntity.ok(new SetorDTO(opt.get()));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public List<SetorDTO> lista() {
        List<Setor> lista = setorRepository.findAll();
        
        return SetorDTO.converter(lista);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<SetorDTO> atualizar(@PathVariable Long id, @RequestBody AtualizaSetorForm form) {
        Optional<Setor> optional = setorRepository.findById(id);
		if(optional.isPresent()) {
			Setor setor = form.atualizar(id, optional.get());
			return ResponseEntity.ok(new SetorDTO(setor));
		}
		return ResponseEntity.notFound().build();
    }
}
