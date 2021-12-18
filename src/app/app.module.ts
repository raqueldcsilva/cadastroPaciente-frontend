import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CadastrarComponent,
    ConvenioComponent,
    FormCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
