import { Component, Input} from '@angular/core';
import {Personaje} from './../../modelos/personaje';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent  {
  @Input() public personaje!: Personaje;
}

