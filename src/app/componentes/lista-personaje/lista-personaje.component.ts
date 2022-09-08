import { Component, Input} from '@angular/core';
import { Personaje } from './../../modelos/personaje'

@Component({
  selector: 'app-lista-personaje',
  templateUrl: './lista-personaje.component.html',
  styleUrls: ['./lista-personaje.component.scss']
})
export class ListaPersonajeComponent{
 @Input() public lista!: Array<Personaje>
}
