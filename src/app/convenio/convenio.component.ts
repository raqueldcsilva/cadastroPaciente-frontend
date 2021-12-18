import { Component, OnInit } from '@angular/core';
import { Convenio } from '../model/Convenio';
import { ConvenioService } from '../service/convenio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {

  convenio: Convenio = new Convenio()
  listaConvenios: Convenio[]

  constructor(
    private router: Router,
    private convenioService: ConvenioService
  ) { }

  ngOnInit() {
    this.findAllConvenios()
  }


  findAllConvenios(){
    this.convenioService.getAllConvenios().subscribe((resp: Convenio[]) =>{
      this.listaConvenios = resp
    })
  }


  cadastrar(){
    this.convenioService.postConvenio(this.convenio).subscribe((resp: Convenio)=>{
      this.convenio = resp
      alert('Convênio cadastrado com sucesso')
      this.findAllConvenios()
      this.convenio = new Convenio()
    })
  }

}
