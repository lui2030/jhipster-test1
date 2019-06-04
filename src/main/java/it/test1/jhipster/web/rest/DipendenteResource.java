package it.test1.jhipster.web.rest;

import it.test1.jhipster.domain.Dipendente;
import it.test1.jhipster.repository.DipendenteRepository;
import it.test1.jhipster.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link it.test1.jhipster.domain.Dipendente}.
 */
@RestController
@RequestMapping("/api")
public class DipendenteResource {

    private final Logger log = LoggerFactory.getLogger(DipendenteResource.class);

    private static final String ENTITY_NAME = "dipendente";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DipendenteRepository dipendenteRepository;

    public DipendenteResource(DipendenteRepository dipendenteRepository) {
        this.dipendenteRepository = dipendenteRepository;
    }

    /**
     * {@code POST  /dipendentes} : Create a new dipendente.
     *
     * @param dipendente the dipendente to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new dipendente, or with status {@code 400 (Bad Request)} if the dipendente has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/dipendentes")
    public ResponseEntity<Dipendente> createDipendente(@Valid @RequestBody Dipendente dipendente) throws URISyntaxException {
        log.debug("REST request to save Dipendente : {}", dipendente);
        if (dipendente.getId() != null) {
            throw new BadRequestAlertException("A new dipendente cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Dipendente result = dipendenteRepository.save(dipendente);
        return ResponseEntity.created(new URI("/api/dipendentes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /dipendentes} : Updates an existing dipendente.
     *
     * @param dipendente the dipendente to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated dipendente,
     * or with status {@code 400 (Bad Request)} if the dipendente is not valid,
     * or with status {@code 500 (Internal Server Error)} if the dipendente couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/dipendentes")
    public ResponseEntity<Dipendente> updateDipendente(@Valid @RequestBody Dipendente dipendente) throws URISyntaxException {
        log.debug("REST request to update Dipendente : {}", dipendente);
        if (dipendente.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Dipendente result = dipendenteRepository.save(dipendente);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, dipendente.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /dipendentes} : get all the dipendentes.
     *
     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of dipendentes in body.
     */
    @GetMapping("/dipendentes")
    public ResponseEntity<List<Dipendente>> getAllDipendentes(Pageable pageable, @RequestParam MultiValueMap<String, String> queryParams, UriComponentsBuilder uriBuilder, @RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get a page of Dipendentes");
        Page<Dipendente> page;
        if (eagerload) {
            page = dipendenteRepository.findAllWithEagerRelationships(pageable);
        } else {
            page = dipendenteRepository.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(uriBuilder.queryParams(queryParams), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /dipendentes/:id} : get the "id" dipendente.
     *
     * @param id the id of the dipendente to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the dipendente, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/dipendentes/{id}")
    public ResponseEntity<Dipendente> getDipendente(@PathVariable Long id) {
        log.debug("REST request to get Dipendente : {}", id);
        Optional<Dipendente> dipendente = dipendenteRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(dipendente);
    }

    /**
     * {@code DELETE  /dipendentes/:id} : delete the "id" dipendente.
     *
     * @param id the id of the dipendente to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/dipendentes/{id}")
    public ResponseEntity<Void> deleteDipendente(@PathVariable Long id) {
        log.debug("REST request to delete Dipendente : {}", id);
        dipendenteRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
