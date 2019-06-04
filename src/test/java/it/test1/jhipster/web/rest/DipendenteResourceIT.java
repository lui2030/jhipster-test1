package it.test1.jhipster.web.rest;

import it.test1.jhipster.TestApp;
import it.test1.jhipster.domain.Dipendente;
import it.test1.jhipster.repository.DipendenteRepository;
import it.test1.jhipster.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import static it.test1.jhipster.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@Link DipendenteResource} REST controller.
 */
@SpringBootTest(classes = TestApp.class)
public class DipendenteResourceIT {

    private static final String DEFAULT_NOME = "AAAAAAAAAA";
    private static final String UPDATED_NOME = "BBBBBBBBBB";

    private static final String DEFAULT_COGNOME = "AAAAAAAAAA";
    private static final String UPDATED_COGNOME = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATA_NASCITA = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATA_NASCITA = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_INDIRIZZO = "AAAAAAAAAA";
    private static final String UPDATED_INDIRIZZO = "BBBBBBBBBB";

    private static final String DEFAULT_NUMERO_TELEFONO = "AAAAAAAAAA";
    private static final String UPDATED_NUMERO_TELEFONO = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_NAZIONALITA = "AAAAAAAAAA";
    private static final String UPDATED_NAZIONALITA = "BBBBBBBBBB";

    @Autowired
    private DipendenteRepository dipendenteRepository;

    @Mock
    private DipendenteRepository dipendenteRepositoryMock;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restDipendenteMockMvc;

    private Dipendente dipendente;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final DipendenteResource dipendenteResource = new DipendenteResource(dipendenteRepository);
        this.restDipendenteMockMvc = MockMvcBuilders.standaloneSetup(dipendenteResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Dipendente createEntity(EntityManager em) {
        Dipendente dipendente = new Dipendente()
            .nome(DEFAULT_NOME)
            .cognome(DEFAULT_COGNOME)
            .dataNascita(DEFAULT_DATA_NASCITA)
            .indirizzo(DEFAULT_INDIRIZZO)
            .numeroTelefono(DEFAULT_NUMERO_TELEFONO)
            .email(DEFAULT_EMAIL)
            .nazionalita(DEFAULT_NAZIONALITA);
        return dipendente;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Dipendente createUpdatedEntity(EntityManager em) {
        Dipendente dipendente = new Dipendente()
            .nome(UPDATED_NOME)
            .cognome(UPDATED_COGNOME)
            .dataNascita(UPDATED_DATA_NASCITA)
            .indirizzo(UPDATED_INDIRIZZO)
            .numeroTelefono(UPDATED_NUMERO_TELEFONO)
            .email(UPDATED_EMAIL)
            .nazionalita(UPDATED_NAZIONALITA);
        return dipendente;
    }

    @BeforeEach
    public void initTest() {
        dipendente = createEntity(em);
    }

    @Test
    @Transactional
    public void createDipendente() throws Exception {
        int databaseSizeBeforeCreate = dipendenteRepository.findAll().size();

        // Create the Dipendente
        restDipendenteMockMvc.perform(post("/api/dipendentes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dipendente)))
            .andExpect(status().isCreated());

        // Validate the Dipendente in the database
        List<Dipendente> dipendenteList = dipendenteRepository.findAll();
        assertThat(dipendenteList).hasSize(databaseSizeBeforeCreate + 1);
        Dipendente testDipendente = dipendenteList.get(dipendenteList.size() - 1);
        assertThat(testDipendente.getNome()).isEqualTo(DEFAULT_NOME);
        assertThat(testDipendente.getCognome()).isEqualTo(DEFAULT_COGNOME);
        assertThat(testDipendente.getDataNascita()).isEqualTo(DEFAULT_DATA_NASCITA);
        assertThat(testDipendente.getIndirizzo()).isEqualTo(DEFAULT_INDIRIZZO);
        assertThat(testDipendente.getNumeroTelefono()).isEqualTo(DEFAULT_NUMERO_TELEFONO);
        assertThat(testDipendente.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testDipendente.getNazionalita()).isEqualTo(DEFAULT_NAZIONALITA);
    }

    @Test
    @Transactional
    public void createDipendenteWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dipendenteRepository.findAll().size();

        // Create the Dipendente with an existing ID
        dipendente.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDipendenteMockMvc.perform(post("/api/dipendentes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dipendente)))
            .andExpect(status().isBadRequest());

        // Validate the Dipendente in the database
        List<Dipendente> dipendenteList = dipendenteRepository.findAll();
        assertThat(dipendenteList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkNazionalitaIsRequired() throws Exception {
        int databaseSizeBeforeTest = dipendenteRepository.findAll().size();
        // set the field null
        dipendente.setNazionalita(null);

        // Create the Dipendente, which fails.

        restDipendenteMockMvc.perform(post("/api/dipendentes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dipendente)))
            .andExpect(status().isBadRequest());

        List<Dipendente> dipendenteList = dipendenteRepository.findAll();
        assertThat(dipendenteList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllDipendentes() throws Exception {
        // Initialize the database
        dipendenteRepository.saveAndFlush(dipendente);

        // Get all the dipendenteList
        restDipendenteMockMvc.perform(get("/api/dipendentes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dipendente.getId().intValue())))
            .andExpect(jsonPath("$.[*].nome").value(hasItem(DEFAULT_NOME.toString())))
            .andExpect(jsonPath("$.[*].cognome").value(hasItem(DEFAULT_COGNOME.toString())))
            .andExpect(jsonPath("$.[*].dataNascita").value(hasItem(DEFAULT_DATA_NASCITA.toString())))
            .andExpect(jsonPath("$.[*].indirizzo").value(hasItem(DEFAULT_INDIRIZZO.toString())))
            .andExpect(jsonPath("$.[*].numeroTelefono").value(hasItem(DEFAULT_NUMERO_TELEFONO.toString())))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL.toString())))
            .andExpect(jsonPath("$.[*].nazionalita").value(hasItem(DEFAULT_NAZIONALITA.toString())));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllDipendentesWithEagerRelationshipsIsEnabled() throws Exception {
        DipendenteResource dipendenteResource = new DipendenteResource(dipendenteRepositoryMock);
        when(dipendenteRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        MockMvc restDipendenteMockMvc = MockMvcBuilders.standaloneSetup(dipendenteResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restDipendenteMockMvc.perform(get("/api/dipendentes?eagerload=true"))
        .andExpect(status().isOk());

        verify(dipendenteRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllDipendentesWithEagerRelationshipsIsNotEnabled() throws Exception {
        DipendenteResource dipendenteResource = new DipendenteResource(dipendenteRepositoryMock);
            when(dipendenteRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));
            MockMvc restDipendenteMockMvc = MockMvcBuilders.standaloneSetup(dipendenteResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();

        restDipendenteMockMvc.perform(get("/api/dipendentes?eagerload=true"))
        .andExpect(status().isOk());

            verify(dipendenteRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getDipendente() throws Exception {
        // Initialize the database
        dipendenteRepository.saveAndFlush(dipendente);

        // Get the dipendente
        restDipendenteMockMvc.perform(get("/api/dipendentes/{id}", dipendente.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(dipendente.getId().intValue()))
            .andExpect(jsonPath("$.nome").value(DEFAULT_NOME.toString()))
            .andExpect(jsonPath("$.cognome").value(DEFAULT_COGNOME.toString()))
            .andExpect(jsonPath("$.dataNascita").value(DEFAULT_DATA_NASCITA.toString()))
            .andExpect(jsonPath("$.indirizzo").value(DEFAULT_INDIRIZZO.toString()))
            .andExpect(jsonPath("$.numeroTelefono").value(DEFAULT_NUMERO_TELEFONO.toString()))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL.toString()))
            .andExpect(jsonPath("$.nazionalita").value(DEFAULT_NAZIONALITA.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingDipendente() throws Exception {
        // Get the dipendente
        restDipendenteMockMvc.perform(get("/api/dipendentes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDipendente() throws Exception {
        // Initialize the database
        dipendenteRepository.saveAndFlush(dipendente);

        int databaseSizeBeforeUpdate = dipendenteRepository.findAll().size();

        // Update the dipendente
        Dipendente updatedDipendente = dipendenteRepository.findById(dipendente.getId()).get();
        // Disconnect from session so that the updates on updatedDipendente are not directly saved in db
        em.detach(updatedDipendente);
        updatedDipendente
            .nome(UPDATED_NOME)
            .cognome(UPDATED_COGNOME)
            .dataNascita(UPDATED_DATA_NASCITA)
            .indirizzo(UPDATED_INDIRIZZO)
            .numeroTelefono(UPDATED_NUMERO_TELEFONO)
            .email(UPDATED_EMAIL)
            .nazionalita(UPDATED_NAZIONALITA);

        restDipendenteMockMvc.perform(put("/api/dipendentes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDipendente)))
            .andExpect(status().isOk());

        // Validate the Dipendente in the database
        List<Dipendente> dipendenteList = dipendenteRepository.findAll();
        assertThat(dipendenteList).hasSize(databaseSizeBeforeUpdate);
        Dipendente testDipendente = dipendenteList.get(dipendenteList.size() - 1);
        assertThat(testDipendente.getNome()).isEqualTo(UPDATED_NOME);
        assertThat(testDipendente.getCognome()).isEqualTo(UPDATED_COGNOME);
        assertThat(testDipendente.getDataNascita()).isEqualTo(UPDATED_DATA_NASCITA);
        assertThat(testDipendente.getIndirizzo()).isEqualTo(UPDATED_INDIRIZZO);
        assertThat(testDipendente.getNumeroTelefono()).isEqualTo(UPDATED_NUMERO_TELEFONO);
        assertThat(testDipendente.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testDipendente.getNazionalita()).isEqualTo(UPDATED_NAZIONALITA);
    }

    @Test
    @Transactional
    public void updateNonExistingDipendente() throws Exception {
        int databaseSizeBeforeUpdate = dipendenteRepository.findAll().size();

        // Create the Dipendente

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDipendenteMockMvc.perform(put("/api/dipendentes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dipendente)))
            .andExpect(status().isBadRequest());

        // Validate the Dipendente in the database
        List<Dipendente> dipendenteList = dipendenteRepository.findAll();
        assertThat(dipendenteList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDipendente() throws Exception {
        // Initialize the database
        dipendenteRepository.saveAndFlush(dipendente);

        int databaseSizeBeforeDelete = dipendenteRepository.findAll().size();

        // Delete the dipendente
        restDipendenteMockMvc.perform(delete("/api/dipendentes/{id}", dipendente.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database is empty
        List<Dipendente> dipendenteList = dipendenteRepository.findAll();
        assertThat(dipendenteList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Dipendente.class);
        Dipendente dipendente1 = new Dipendente();
        dipendente1.setId(1L);
        Dipendente dipendente2 = new Dipendente();
        dipendente2.setId(dipendente1.getId());
        assertThat(dipendente1).isEqualTo(dipendente2);
        dipendente2.setId(2L);
        assertThat(dipendente1).isNotEqualTo(dipendente2);
        dipendente1.setId(null);
        assertThat(dipendente1).isNotEqualTo(dipendente2);
    }
}
