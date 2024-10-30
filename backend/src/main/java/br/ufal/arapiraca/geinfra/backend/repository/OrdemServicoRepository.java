package br.ufal.arapiraca.geinfra.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufal.arapiraca.geinfra.backend.model.OrdemServico;

public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Long>{

}
