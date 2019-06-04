import { Moment } from 'moment';
import { ISkill } from 'app/shared/model/skill.model';

export interface IDipendente {
  id?: number;
  nome?: string;
  cognome?: string;
  dataNascita?: Moment;
  indirizzo?: string;
  numeroTelefono?: string;
  email?: string;
  nazionalita?: string;
  skills?: ISkill[];
}

export class Dipendente implements IDipendente {
  constructor(
    public id?: number,
    public nome?: string,
    public cognome?: string,
    public dataNascita?: Moment,
    public indirizzo?: string,
    public numeroTelefono?: string,
    public email?: string,
    public nazionalita?: string,
    public skills?: ISkill[]
  ) {}
}
