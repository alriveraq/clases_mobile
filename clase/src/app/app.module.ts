import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarImageComponent } from './componentes/mostrar-image/mostrar-image.component';
import { PokedexComponent } from './componentes/pokedex/pokedex.component';
import { ListarpokemonComponent } from './componentes/listarpokemon/listarpokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarImageComponent,
    PokedexComponent,
    ListarpokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
