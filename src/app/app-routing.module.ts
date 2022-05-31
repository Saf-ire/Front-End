import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {ContactoComponent} from './componentes/contacto/contacto.component';
import {ServicesComponent} from './componentes/services/services.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'services', component: ServicesComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }