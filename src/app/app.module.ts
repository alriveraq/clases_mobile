import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonajeComponent } from './componentes/lista-personaje/lista-personaje.component';
import { MostrarImagenComponent } from './componentes/mostrar-imagen/mostrar-imagen.component';
import { WikiComponent } from './componentes/wiki/wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajeComponent,
    MostrarImagenComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
