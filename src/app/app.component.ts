import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre : string = 'Alejandro';
  public edad : number = 20 ;
  public estaVivo : boolean = true ;
  public apellido : string = 'Rivera';
  public hobbie : string = 'Me gusta los videojuegos'

  public sumarDosNumeros(n1: number, n2: number):number{
    return n1 + n2 ;
  }

  public restar(n1: number, n2: number):number{
    return n1 - n2 ;
  }
  public multiplicar(n1: number, n2: number):number{
    return n1 * n2 ;
  }
}
