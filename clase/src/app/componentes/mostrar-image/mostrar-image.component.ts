import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mostrar-image',
  templateUrl: './mostrar-image.component.html',
  styleUrls: ['./mostrar-image.component.scss']
})
export class MostrarImageComponent {

  @Input() public image:  string = '';
  @Input() public pokimin:  string = '';

  public imagerep: string = 'https://static.cargurus.com/images/forsale/2022/08/18/22/56/1940_lincoln_zephyr-pic-1559475570247911000-1024x768.jpeg';

  public cambiarImagen(): void{
    this.image = this.imagerep;
  }
}

