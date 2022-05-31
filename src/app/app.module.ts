import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServicesComponent } from './componentes/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    NavbarComponent,
    ContactoComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
