package it.test1.jhipster.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Skill.
 */
@Entity
@Table(name = "skill")
public class Skill implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "livello")
    private Integer livello;

    @Column(name = "descrizione")
    private String descrizione;

    @ManyToMany(mappedBy = "skills")
    @JsonIgnore
    private Set<Dipendente> nomes = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public Skill nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getLivello() {
        return livello;
    }

    public Skill livello(Integer livello) {
        this.livello = livello;
        return this;
    }

    public void setLivello(Integer livello) {
        this.livello = livello;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public Skill descrizione(String descrizione) {
        this.descrizione = descrizione;
        return this;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public Set<Dipendente> getNomes() {
        return nomes;
    }

    public Skill nomes(Set<Dipendente> dipendentes) {
        this.nomes = dipendentes;
        return this;
    }

    public Skill addNome(Dipendente dipendente) {
        this.nomes.add(dipendente);
        dipendente.getSkills().add(this);
        return this;
    }

    public Skill removeNome(Dipendente dipendente) {
        this.nomes.remove(dipendente);
        dipendente.getSkills().remove(this);
        return this;
    }

    public void setNomes(Set<Dipendente> dipendentes) {
        this.nomes = dipendentes;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Skill)) {
            return false;
        }
        return id != null && id.equals(((Skill) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Skill{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", livello=" + getLivello() +
            ", descrizione='" + getDescrizione() + "'" +
            "}";
    }
}
