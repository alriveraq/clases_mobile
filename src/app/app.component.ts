import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  public contador: number = 0;
  public scroll: number = 0;
  public imagenoriginal: string = 'https://i.pinimg.com/originals/8b/9e/30/8b9e3020a2482b73870756a347cd1fa9.jpg'
  public imagen: string = this.imagenoriginal;
  public alto: number= 1000;
  public ancho: number= 1000;
  public mostrarclase: boolean = false
  public img2: string = 'https://wallpaperaccess.com/full/899449.jpg'
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public escucharalto(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.alto = Number.parseInt(elemento.value);
  }
  public escucharbajo(evento: Event): void {
    const elemento = evento.target as HTMLInputElement
    this.ancho = Number.parseInt(elemento.value)
  }
  public cambiarimagen(): void{
    if (this.imagen === this.imagenoriginal) {
      this.imagen = this.img2
    }else{
      this.imagen = this.imagenoriginal
    }
  }
}
