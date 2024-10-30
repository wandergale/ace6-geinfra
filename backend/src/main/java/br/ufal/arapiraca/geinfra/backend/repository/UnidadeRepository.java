package br.ufal.arapiraca.geinfra.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufal.arapiraca.geinfra.backend.model.Unidade;


public interface UnidadeRepository extends JpaRepository<Unidade, Long>{
    Unidade findByNome(String nome);
}
