import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [

  /* TODO ROUTE DE ACESSO AO HTML DEVE SER COLOCADO PATH AQUI */

  {path: 'clientes', component: LayoutComponent, children: [
    {path: 'form' , component: ClientesFormComponent },
    {path: 'form/:id' , component: ClientesFormComponent },
    {path: 'lista', component: ClientesListaComponent},
    {path: '', redirectTo: '/clientes/lista' , pathMatch: 'full'} /* quando acessar /clientes , será redirecionado para clientes/lista */
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
