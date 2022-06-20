import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { LayoutComponent } from './layout/layout.component'
import { CalendarioModule } from './calendario/calendario.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateModule,
    ClientesModule,
    CalendarioModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule
    

  ],
  providers: [
    ClientesService,

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
