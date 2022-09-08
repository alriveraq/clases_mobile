import { Component, Input } from '@angular/core';
import { Perros } from './../../../modelos/perros';

@Component({
  selector: 'app-listar-perro',
  templateUrl: './listar-perro.component.html',
  styleUrls: ['./listar-perro.component.scss']
})
export class ListarPerroComponent{
 @Input() public listo!: Array<Perros>;

}
