import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/model/Convenio';
import { Paciente } from 'src/app/model/Paciente';
import { ConvenioService } from 'src/app/service/convenio.service';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {

  paciente: Paciente = new Paciente()
  convenio: Convenio = new Convenio()

  listaConvenios: Convenio[]
  idConvenio: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private convenioService: ConvenioService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    this.findByIdPaciente(id)
    this.findAllConvenios()
  }

  findByIdPaciente(id: number){
    this.pacienteService.getByIdPaciente(id).subscribe((resp: Paciente) => {
      this.paciente = resp
    })
  }

  findByIdConvenio(){
    this.convenioService.getByIdConvenio(this.idConvenio).subscribe((resp: Convenio) => {
      this.convenio = resp
    })
  }

  findAllConvenios(){
    this.convenioService.getAllConvenios().subscribe((resp: Convenio[])=> {
      this.listaConvenios = resp
    })
  }

  atualizar(){
    this.convenio.id = this.idConvenio
    this.paciente.convenio = this.convenio

    this.pacienteService.putPaciente(this.paciente).subscribe((resp: Paciente) => {
      this.paciente = resp
      alert('Paciente Atualizado com Sucesso!')
      this.router.navigate(['/cadastrar'])
    })
  }
}
