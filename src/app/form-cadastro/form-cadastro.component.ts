import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convenio } from '../model/Convenio';
import { Paciente } from '../model/Paciente';
import { ConvenioService } from '../service/convenio.service';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  paciente: Paciente = new Paciente()
  listaPacientes: Paciente[]

  convenio: Convenio = new Convenio()
  listaConvenios: Convenio[]
  idConvenio: number


  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private convenioService: ConvenioService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.getAllConvenios()
    this.getAllPacientes()
  }

  getAllConvenios(){
    this.convenioService.getAllConvenios().subscribe((resp: Convenio[])=> {
      this.listaConvenios = resp
    })
  }

  findByIdConvenio(){
    this.convenioService.getByIdConvenio(this.idConvenio).subscribe((resp: Convenio) => {
      this.convenio = resp
    })
  }

  getAllPacientes(){
    this.pacienteService.getAllPacientes().subscribe((resp: Paciente[]) => {
      this.listaPacientes = resp
    })
  }

  cadastrar(){
    // this.convenio.id = this.idConvenio
    // this.paciente.convenio = this.convenio

    this.pacienteService.postPaciente(this.paciente).subscribe((resp: Paciente) => {
      this.paciente = resp
      alert('Paciente cadastrado com sucesso')
      this.getAllPacientes()
      //this.paciente = new Paciente()

    })
  }

}
