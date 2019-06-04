package it.test1.jhipster.domain;



import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Dipendente.
 */
@Entity
@Table(name = "dipendente")
public class Dipendente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cognome")
    private String cognome;

    @Column(name = "data_nascita")
    private LocalDate dataNascita;

    @Column(name = "indirizzo")
    private String indirizzo;

    @Column(name = "numero_telefono")
    private String numeroTelefono;

    @Column(name = "email")
    private String email;

    @NotNull
    @Size(max = 20)
    @Column(name = "nazionalita", length = 20, nullable = false)
    private String nazionalita;

    @ManyToMany
    @JoinTable(name = "dipendente_skill",
               joinColumns = @JoinColumn(name = "dipendente_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "skill_id", referencedColumnName = "id"))
    private Set<Skill> skills = new HashSet<>();

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

    public Dipendente nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public Dipendente cognome(String cognome) {
        this.cognome = cognome;
        return this;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public LocalDate getDataNascita() {
        return dataNascita;
    }

    public Dipendente dataNascita(LocalDate dataNascita) {
        this.dataNascita = dataNascita;
        return this;
    }

    public void setDataNascita(LocalDate dataNascita) {
        this.dataNascita = dataNascita;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public Dipendente indirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
        return this;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public String getNumeroTelefono() {
        return numeroTelefono;
    }

    public Dipendente numeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
        return this;
    }

    public void setNumeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    public String getEmail() {
        return email;
    }

    public Dipendente email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNazionalita() {
        return nazionalita;
    }

    public Dipendente nazionalita(String nazionalita) {
        this.nazionalita = nazionalita;
        return this;
    }

    public void setNazionalita(String nazionalita) {
        this.nazionalita = nazionalita;
    }

    public Set<Skill> getSkills() {
        return skills;
    }

    public Dipendente skills(Set<Skill> skills) {
        this.skills = skills;
        return this;
    }

    public Dipendente addSkill(Skill skill) {
        this.skills.add(skill);
        skill.getNomes().add(this);
        return this;
    }

    public Dipendente removeSkill(Skill skill) {
        this.skills.remove(skill);
        skill.getNomes().remove(this);
        return this;
    }

    public void setSkills(Set<Skill> skills) {
        this.skills = skills;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Dipendente)) {
            return false;
        }
        return id != null && id.equals(((Dipendente) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Dipendente{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", cognome='" + getCognome() + "'" +
            ", dataNascita='" + getDataNascita() + "'" +
            ", indirizzo='" + getIndirizzo() + "'" +
            ", numeroTelefono='" + getNumeroTelefono() + "'" +
            ", email='" + getEmail() + "'" +
            ", nazionalita='" + getNazionalita() + "'" +
            "}";
    }
}
