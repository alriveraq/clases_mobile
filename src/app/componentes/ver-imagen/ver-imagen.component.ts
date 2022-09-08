import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ver-imagen',
  templateUrl: './ver-imagen.component.html',
  styleUrls: ['./ver-imagen.component.scss']
})
export class VerImagenComponent  {

  @Input() public image:  string = '';
  @Input() public perritos:  string = '';

  public imagerep: string = "";

  public cambiarImagen(): void{
    this.image = this.imagerep;


}

}
