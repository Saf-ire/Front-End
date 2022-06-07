import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServicesComponent } from './componentes/services/services.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { CommentsComponent } from './componentes/comments/comments.component';
import { CameraComponent } from './componentes/camera/camera.component';
import { PsyhoPerfilComponent } from './componentes/psyho-perfil/psyho-perfil.component';
import { PatientProfileComponent } from './componentes/patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    LogInComponent,
    SignUpComponent,
    CommentsComponent,
    CameraComponent,
    PsyhoPerfilComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
