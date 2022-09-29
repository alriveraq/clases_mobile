import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import {ComponenteComponent} from './componente/componente.component';
import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [PokemonPage, ComponenteComponent]
})
export class PokemonPageModule {}
