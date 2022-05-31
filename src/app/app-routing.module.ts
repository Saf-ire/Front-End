import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {ContactoComponent} from './componentes/contacto/contacto.component';
import {ServicesComponent} from './componentes/services/services.component';
import {LogInComponent} from './componentes/log-in/log-in.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'log-in', component: LogInComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }