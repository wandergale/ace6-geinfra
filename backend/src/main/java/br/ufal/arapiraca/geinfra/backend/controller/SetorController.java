package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

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
    
}
