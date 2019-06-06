package it.test1.jhipster.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Skill.class)
public abstract class Skill_ {

	public static volatile SingularAttribute<Skill, String> descrizione;
	public static volatile SetAttribute<Skill, Dipendente> nomes;
	public static volatile SingularAttribute<Skill, String> nome;
	public static volatile SingularAttribute<Skill, Long> id;
	public static volatile SingularAttribute<Skill, Integer> livello;

	public static final String DESCRIZIONE = "descrizione";
	public static final String NOMES = "nomes";
	public static final String NOME = "nome";
	public static final String ID = "id";
	public static final String LIVELLO = "livello";

}

