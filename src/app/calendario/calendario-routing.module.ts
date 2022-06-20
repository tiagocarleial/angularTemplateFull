import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CalendarioPageComponent } from './calendario-page/calendario-page.component';


const routes: Routes = [

  {path: 'calendario', component: LayoutComponent, children: [
    {path: 'page', component: CalendarioPageComponent},
    {path: '', redirectTo: '/calendario/page' , pathMatch: 'full'}
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
