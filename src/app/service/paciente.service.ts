import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPacientes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>('http://localhost:8080/pacientes')
  }

  getByIdPaciente(id: number): Observable<Paciente>{
    return this.http.get<Paciente>(`http://localhost:8080/pacientes/${id}`)
  }

  postPaciente(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>('http://localhost:8080/pacientes', paciente)
  }

  putPaciente(paciente: Paciente):Observable<Paciente>{
    return this.http.put<Paciente>('http://localhost:8080/pacientes', paciente)
  }
}
