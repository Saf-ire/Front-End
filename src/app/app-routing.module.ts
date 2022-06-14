import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home-page/home.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { CommentsComponent } from './componentes/comments/comments.component';
import { CameraComponent } from './componentes/camera/camera.component';
import { PsyhoPerfilComponent } from './componentes/psyho-perfil/psyho-perfil.component';
import { ErrorpageComponent } from'./componentes/errorpage/errorpage.component';
  

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'psyho-perfil', component: PsyhoPerfilComponent },
  { path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
