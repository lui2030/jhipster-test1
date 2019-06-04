import { IDipendente } from 'app/shared/model/dipendente.model';

export interface ISkill {
  id?: number;
  nome?: string;
  livello?: number;
  descrizione?: string;
  nomes?: IDipendente[];
}

export class Skill implements ISkill {
  constructor(
    public id?: number,
    public nome?: string,
    public livello?: number,
    public descrizione?: string,
    public nomes?: IDipendente[]
  ) {}
}
