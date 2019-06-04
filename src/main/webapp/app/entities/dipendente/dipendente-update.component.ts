import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IDipendente, Dipendente } from 'app/shared/model/dipendente.model';
import { DipendenteService } from './dipendente.service';
import { ISkill } from 'app/shared/model/skill.model';
import { SkillService } from 'app/entities/skill';

@Component({
  selector: 'jhi-dipendente-update',
  templateUrl: './dipendente-update.component.html'
})
export class DipendenteUpdateComponent implements OnInit {
  dipendente: IDipendente;
  isSaving: boolean;

  skills: ISkill[];
  dataNascitaDp: any;

  editForm = this.fb.group({
    id: [],
    nome: [],
    cognome: [],
    dataNascita: [],
    indirizzo: [],
    numeroTelefono: [],
    email: [],
    nazionalita: [null, [Validators.required, Validators.maxLength(20)]],
    skills: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected dipendenteService: DipendenteService,
    protected skillService: SkillService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ dipendente }) => {
      this.updateForm(dipendente);
      this.dipendente = dipendente;
    });
    this.skillService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ISkill[]>) => mayBeOk.ok),
        map((response: HttpResponse<ISkill[]>) => response.body)
      )
      .subscribe((res: ISkill[]) => (this.skills = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(dipendente: IDipendente) {
    this.editForm.patchValue({
      id: dipendente.id,
      nome: dipendente.nome,
      cognome: dipendente.cognome,
      dataNascita: dipendente.dataNascita,
      indirizzo: dipendente.indirizzo,
      numeroTelefono: dipendente.numeroTelefono,
      email: dipendente.email,
      nazionalita: dipendente.nazionalita,
      skills: dipendente.skills
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const dipendente = this.createFromForm();
    if (dipendente.id !== undefined) {
      this.subscribeToSaveResponse(this.dipendenteService.update(dipendente));
    } else {
      this.subscribeToSaveResponse(this.dipendenteService.create(dipendente));
    }
  }

  private createFromForm(): IDipendente {
    const entity = {
      ...new Dipendente(),
      id: this.editForm.get(['id']).value,
      nome: this.editForm.get(['nome']).value,
      cognome: this.editForm.get(['cognome']).value,
      dataNascita: this.editForm.get(['dataNascita']).value,
      indirizzo: this.editForm.get(['indirizzo']).value,
      numeroTelefono: this.editForm.get(['numeroTelefono']).value,
      email: this.editForm.get(['email']).value,
      nazionalita: this.editForm.get(['nazionalita']).value,
      skills: this.editForm.get(['skills']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDipendente>>) {
    result.subscribe((res: HttpResponse<IDipendente>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackSkillById(index: number, item: ISkill) {
    return item.id;
  }

  getSelected(selectedVals: Array<any>, option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
