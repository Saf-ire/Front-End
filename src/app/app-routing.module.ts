import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {ServicesComponent} from './componentes/services/services.component';
import {LogInComponent} from './componentes/log-in/log-in.component';
import {SignUpComponent} from './componentes/sign-up/sign-up.component';
import { CommentsComponent } from './componentes/comments/comments.component';
import { CameraComponent } from './componentes/camera/camera.component';
import { PsyhoPerfilComponent } from './componentes/psyho-perfil/psyho-perfil.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', component: HomeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'camera', component: CameraComponent},
  {path: 'psyho-perfil', component: PsyhoPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }