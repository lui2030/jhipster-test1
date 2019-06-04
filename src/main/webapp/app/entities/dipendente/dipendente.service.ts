import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDipendente } from 'app/shared/model/dipendente.model';

type EntityResponseType = HttpResponse<IDipendente>;
type EntityArrayResponseType = HttpResponse<IDipendente[]>;

@Injectable({ providedIn: 'root' })
export class DipendenteService {
  public resourceUrl = SERVER_API_URL + 'api/dipendentes';

  constructor(protected http: HttpClient) {}

  create(dipendente: IDipendente): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dipendente);
    return this.http
      .post<IDipendente>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(dipendente: IDipendente): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dipendente);
    return this.http
      .put<IDipendente>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDipendente>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDipendente[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(dipendente: IDipendente): IDipendente {
    const copy: IDipendente = Object.assign({}, dipendente, {
      dataNascita: dipendente.dataNascita != null && dipendente.dataNascita.isValid() ? dipendente.dataNascita.format(DATE_FORMAT) : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dataNascita = res.body.dataNascita != null ? moment(res.body.dataNascita) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((dipendente: IDipendente) => {
        dipendente.dataNascita = dipendente.dataNascita != null ? moment(dipendente.dataNascita) : null;
      });
    }
    return res;
  }
}
