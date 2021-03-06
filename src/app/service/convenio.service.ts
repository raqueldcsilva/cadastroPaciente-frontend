import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../model/Convenio';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  constructor(private http: HttpClient) { }

  getAllConvenios(): Observable<Convenio[]>{
    return this.http.get<Convenio[]>('http://localhost:8080/convenios')
  }

  getByIdConvenio(id: number): Observable<Convenio>{
    return this.http.get<Convenio>(`http://localhost:8080/convenios/${id}`)
  }

  postConvenio(convenio: Convenio): Observable<Convenio>{
    return this.http.post<Convenio>('http://localhost:8080/convenios', convenio)
  }

  putConvenio(convenio: Convenio): Observable<Convenio>{
    return this.http.put<Convenio>('http://localhost:8080/convenios', convenio)
  }
}
