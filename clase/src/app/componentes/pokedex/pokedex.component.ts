import { Component, Input} from '@angular/core';
import { Pokemon } from "src/app/modelos/pokemon";
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  @Input() public pokemon!: Pokemon;
}
