import { Component, Input} from '@angular/core';
import {Pokemon} from './../../modelos/pokemon'
@Component({
  selector: 'app-listarpokemon',
  templateUrl: './listarpokemon.component.html',
  styleUrls: ['./listarpokemon.component.scss']
})
export class ListarpokemonComponent{
  @Input() public listeilor!: Array<Pokemon>;
}
