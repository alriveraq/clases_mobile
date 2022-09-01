import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Ignacio';
  public contador: number = 0;
  public scroll: number = 0;
  private imagenoriginal: string = 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Golden_Retriever_9-year_old.jpg'
  public imagen: string = this.imagenoriginal;
  public golden: string = 'https://c.tenor.com/Z4KkLLsnfdQAAAAM/air-golden-retriever.gif';
  public defalto: number= 500;
  public defancho: number= 226;
  public alto: number= 0;
  public ancho: number= 0;
  public britanico: boolean = false
  public americano: boolean = false
  public canadiense: boolean = false
  private img2: string = 'https://c.tenor.com/62v9g8ReWXsAAAAC/golden-retriever-dog.gif'
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
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
