package it.test1.jhipster.web.rest;

import it.test1.jhipster.TestApp;
import it.test1.jhipster.domain.Skill;
import it.test1.jhipster.domain.Dipendente;
import it.test1.jhipster.repository.SkillRepository;
import it.test1.jhipster.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static it.test1.jhipster.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@Link SkillResource} REST controller.
 */
@SpringBootTest(classes = TestApp.class)
public class SkillResourceIT {

    private static final String DEFAULT_NOME = "AAAAAAAAAA";
    private static final String UPDATED_NOME = "BBBBBBBBBB";

    private static final Integer DEFAULT_LIVELLO = 1;
    private static final Integer UPDATED_LIVELLO = 2;

    private static final String DEFAULT_DESCRIZIONE = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIZIONE = "BBBBBBBBBB";

    @Autowired
    private SkillRepository skillRepository;

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

    private MockMvc restSkillMockMvc;

    private Skill skill;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final SkillResource skillResource = new SkillResource(skillRepository);
        this.restSkillMockMvc = MockMvcBuilders.standaloneSetup(skillResource)
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
    public static Skill createEntity(EntityManager em) {
        Skill skill = new Skill()
            .nome(DEFAULT_NOME)
            .livello(DEFAULT_LIVELLO)
            .descrizione(DEFAULT_DESCRIZIONE);
        // Add required entity
        Dipendente dipendente;
        if (TestUtil.findAll(em, Dipendente.class).isEmpty()) {
            dipendente = DipendenteResourceIT.createEntity(em);
            em.persist(dipendente);
            em.flush();
        } else {
            dipendente = TestUtil.findAll(em, Dipendente.class).get(0);
        }
        skill.getNomes().add(dipendente);
        return skill;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Skill createUpdatedEntity(EntityManager em) {
        Skill skill = new Skill()
            .nome(UPDATED_NOME)
            .livello(UPDATED_LIVELLO)
            .descrizione(UPDATED_DESCRIZIONE);
        // Add required entity
        Dipendente dipendente;
        if (TestUtil.findAll(em, Dipendente.class).isEmpty()) {
            dipendente = DipendenteResourceIT.createUpdatedEntity(em);
            em.persist(dipendente);
            em.flush();
        } else {
            dipendente = TestUtil.findAll(em, Dipendente.class).get(0);
        }
        skill.getNomes().add(dipendente);
        return skill;
    }

    @BeforeEach
    public void initTest() {
        skill = createEntity(em);
    }

    @Test
    @Transactional
    public void createSkill() throws Exception {
        int databaseSizeBeforeCreate = skillRepository.findAll().size();

        // Create the Skill
        restSkillMockMvc.perform(post("/api/skills")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(skill)))
            .andExpect(status().isCreated());

        // Validate the Skill in the database
        List<Skill> skillList = skillRepository.findAll();
        assertThat(skillList).hasSize(databaseSizeBeforeCreate + 1);
        Skill testSkill = skillList.get(skillList.size() - 1);
        assertThat(testSkill.getNome()).isEqualTo(DEFAULT_NOME);
        assertThat(testSkill.getLivello()).isEqualTo(DEFAULT_LIVELLO);
        assertThat(testSkill.getDescrizione()).isEqualTo(DEFAULT_DESCRIZIONE);
    }

    @Test
    @Transactional
    public void createSkillWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = skillRepository.findAll().size();

        // Create the Skill with an existing ID
        skill.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSkillMockMvc.perform(post("/api/skills")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(skill)))
            .andExpect(status().isBadRequest());

        // Validate the Skill in the database
        List<Skill> skillList = skillRepository.findAll();
        assertThat(skillList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllSkills() throws Exception {
        // Initialize the database
        skillRepository.saveAndFlush(skill);

        // Get all the skillList
        restSkillMockMvc.perform(get("/api/skills?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(skill.getId().intValue())))
            .andExpect(jsonPath("$.[*].nome").value(hasItem(DEFAULT_NOME.toString())))
            .andExpect(jsonPath("$.[*].livello").value(hasItem(DEFAULT_LIVELLO)))
            .andExpect(jsonPath("$.[*].descrizione").value(hasItem(DEFAULT_DESCRIZIONE.toString())));
    }
    
    @Test
    @Transactional
    public void getSkill() throws Exception {
        // Initialize the database
        skillRepository.saveAndFlush(skill);

        // Get the skill
        restSkillMockMvc.perform(get("/api/skills/{id}", skill.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(skill.getId().intValue()))
            .andExpect(jsonPath("$.nome").value(DEFAULT_NOME.toString()))
            .andExpect(jsonPath("$.livello").value(DEFAULT_LIVELLO))
            .andExpect(jsonPath("$.descrizione").value(DEFAULT_DESCRIZIONE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingSkill() throws Exception {
        // Get the skill
        restSkillMockMvc.perform(get("/api/skills/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSkill() throws Exception {
        // Initialize the database
        skillRepository.saveAndFlush(skill);

        int databaseSizeBeforeUpdate = skillRepository.findAll().size();

        // Update the skill
        Skill updatedSkill = skillRepository.findById(skill.getId()).get();
        // Disconnect from session so that the updates on updatedSkill are not directly saved in db
        em.detach(updatedSkill);
        updatedSkill
            .nome(UPDATED_NOME)
            .livello(UPDATED_LIVELLO)
            .descrizione(UPDATED_DESCRIZIONE);

        restSkillMockMvc.perform(put("/api/skills")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedSkill)))
            .andExpect(status().isOk());

        // Validate the Skill in the database
        List<Skill> skillList = skillRepository.findAll();
        assertThat(skillList).hasSize(databaseSizeBeforeUpdate);
        Skill testSkill = skillList.get(skillList.size() - 1);
        assertThat(testSkill.getNome()).isEqualTo(UPDATED_NOME);
        assertThat(testSkill.getLivello()).isEqualTo(UPDATED_LIVELLO);
        assertThat(testSkill.getDescrizione()).isEqualTo(UPDATED_DESCRIZIONE);
    }

    @Test
    @Transactional
    public void updateNonExistingSkill() throws Exception {
        int databaseSizeBeforeUpdate = skillRepository.findAll().size();

        // Create the Skill

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSkillMockMvc.perform(put("/api/skills")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(skill)))
            .andExpect(status().isBadRequest());

        // Validate the Skill in the database
        List<Skill> skillList = skillRepository.findAll();
        assertThat(skillList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteSkill() throws Exception {
        // Initialize the database
        skillRepository.saveAndFlush(skill);

        int databaseSizeBeforeDelete = skillRepository.findAll().size();

        // Delete the skill
        restSkillMockMvc.perform(delete("/api/skills/{id}", skill.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database is empty
        List<Skill> skillList = skillRepository.findAll();
        assertThat(skillList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Skill.class);
        Skill skill1 = new Skill();
        skill1.setId(1L);
        Skill skill2 = new Skill();
        skill2.setId(skill1.getId());
        assertThat(skill1).isEqualTo(skill2);
        skill2.setId(2L);
        assertThat(skill1).isNotEqualTo(skill2);
        skill1.setId(null);
        assertThat(skill1).isNotEqualTo(skill2);
    }
}
