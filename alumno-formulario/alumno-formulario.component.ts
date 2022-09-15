import { Component, Output,EventEmitter} from '@angular/core';
import { Alumno} from './../../modelos/alumno';

@Component({
  selector: 'app-alumno-formulario',
  templateUrl: './alumno-formulario.component.html',
  styleUrls: ['./alumno-formulario.component.scss']
})
export class AlumnoFormularioComponent {

  public seccion: Array<string> = [
    '002d',
    '007d',
  ]

  public alumno: Alumno ={
    rut:'', //input
    nombre:'', //input
    apellido:'', //input
    edad: 0, //input
    seccion:'', //input

  }

  public inprut(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.rut = elemento.value
  }

  public inpnombre(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.nombre = elemento.value
  }

  public inpapellido(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.apellido= elemento.value
  }

  public inpedad(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(elemento.value)
  }

  public inpseccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.seccion = elemento.value
  }

  @Output()public enviaralumno = new EventEmitter<Alumno>()
  public guardarElemnto(){
    const copia: Alumno ={
      ...this.alumno
    }
    this.enviaralumno.emit(copia);

    this.alumno = {
      rut: "",
      nombre:"",
      apellido:"",
      edad:0,
      seccion: ""
    }
  }

}
