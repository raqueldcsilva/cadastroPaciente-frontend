import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/model/Convenio';
import { ConvenioService } from 'src/app/service/convenio.service';

@Component({
  selector: 'app-convenio-edit',
  templateUrl: './convenio-edit.component.html',
  styleUrls: ['./convenio-edit.component.css']
})
export class ConvenioEditComponent implements OnInit {

  convenio: Convenio = new Convenio()

  constructor(
    private convenioService: ConvenioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findByIdConvenio(id)
  }

  findByIdConvenio(id: number){
    this.convenioService.getByIdConvenio(id).subscribe((resp: Convenio) => {
      this.convenio = resp
    })
  }

  atualizar(){
    this.convenioService.putConvenio(this.convenio).subscribe((resp: Convenio) => {
      this.convenio = resp
      alert('Convênio atualizado com sucesso!')
      this.router.navigate(['/convenio'])
    })
  }

}
