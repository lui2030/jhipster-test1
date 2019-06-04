import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ISkill, Skill } from 'app/shared/model/skill.model';
import { SkillService } from './skill.service';
import { IDipendente } from 'app/shared/model/dipendente.model';
import { DipendenteService } from 'app/entities/dipendente';

@Component({
  selector: 'jhi-skill-update',
  templateUrl: './skill-update.component.html'
})
export class SkillUpdateComponent implements OnInit {
  skill: ISkill;
  isSaving: boolean;

  dipendentes: IDipendente[];

  editForm = this.fb.group({
    id: [],
    nome: [],
    livello: [],
    descrizione: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected skillService: SkillService,
    protected dipendenteService: DipendenteService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ skill }) => {
      this.updateForm(skill);
      this.skill = skill;
    });
    this.dipendenteService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IDipendente[]>) => mayBeOk.ok),
        map((response: HttpResponse<IDipendente[]>) => response.body)
      )
      .subscribe((res: IDipendente[]) => (this.dipendentes = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(skill: ISkill) {
    this.editForm.patchValue({
      id: skill.id,
      nome: skill.nome,
      livello: skill.livello,
      descrizione: skill.descrizione
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const skill = this.createFromForm();
    if (skill.id !== undefined) {
      this.subscribeToSaveResponse(this.skillService.update(skill));
    } else {
      this.subscribeToSaveResponse(this.skillService.create(skill));
    }
  }

  private createFromForm(): ISkill {
    const entity = {
      ...new Skill(),
      id: this.editForm.get(['id']).value,
      nome: this.editForm.get(['nome']).value,
      livello: this.editForm.get(['livello']).value,
      descrizione: this.editForm.get(['descrizione']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISkill>>) {
    result.subscribe((res: HttpResponse<ISkill>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

  trackDipendenteById(index: number, item: IDipendente) {
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
