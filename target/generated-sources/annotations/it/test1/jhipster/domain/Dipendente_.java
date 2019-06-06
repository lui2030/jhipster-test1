package it.test1.jhipster.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Dipendente.class)
public abstract class Dipendente_ {

	public static volatile SetAttribute<Dipendente, Skill> skills;
	public static volatile SingularAttribute<Dipendente, LocalDate> dataNascita;
	public static volatile SingularAttribute<Dipendente, String> cognome;
	public static volatile SingularAttribute<Dipendente, String> indirizzo;
	public static volatile SingularAttribute<Dipendente, String> nazionalita;
	public static volatile SingularAttribute<Dipendente, String> nome;
	public static volatile SingularAttribute<Dipendente, Long> id;
	public static volatile SingularAttribute<Dipendente, String> email;
	public static volatile SingularAttribute<Dipendente, String> numeroTelefono;

	public static final String SKILLS = "skills";
	public static final String DATA_NASCITA = "dataNascita";
	public static final String COGNOME = "cognome";
	public static final String INDIRIZZO = "indirizzo";
	public static final String NAZIONALITA = "nazionalita";
	public static final String NOME = "nome";
	public static final String ID = "id";
	public static final String EMAIL = "email";
	public static final String NUMERO_TELEFONO = "numeroTelefono";

}

