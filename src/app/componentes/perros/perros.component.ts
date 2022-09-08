import { Component, Input } from '@angular/core';
import { Perros } from './../../../modelos/perros';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {
  @Input() public perros! : Perros;


}
