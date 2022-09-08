import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPerroComponent } from './componentes/listar-perro/listar-perro.component';
import { VerImagenComponent } from './componentes/ver-imagen/ver-imagen.component';
import { PerrosComponent } from './componentes/perros/perros.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarPerroComponent,
    VerImagenComponent,
    PerrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
