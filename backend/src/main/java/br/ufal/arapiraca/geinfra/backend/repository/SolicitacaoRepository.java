package br.ufal.arapiraca.geinfra.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long>{
    
}
