import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [

  {path: '', redirectTo: 'cadastrar', pathMatch: 'full'},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'form-cadastro', component: FormCadastroComponent},
  {path: 'convenio', component: ConvenioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
