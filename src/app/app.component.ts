import { Component } from '@angular/core';
import{Personaje} from './modelos/personaje'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud_hunterxhunter';

  public listapersonaje: Array<Personaje> =[
    {
      id: 1,
      nombre: "Gon Freecss",
      imagen: "https://i.pinimg.com/736x/72/c7/dc/72c7dccf0b0e8ad958ab0f20d175a639.jpg",
      edad: 14,
      personaje: 'Principal',
      aura: 'Intensificacion',
      ocupacion: 'Tesoros',
      sexo: 'Masculino'
    },
    {
      id: 2,
      nombre: "Killua Zoldyck",
      imagen: "https://i.pinimg.com/originals/d5/9c/e4/d59ce4b1b613d464d6114859a0df6dd4.jpg",
      edad: 13,
      personaje: 'Principal',
      aura: 'Transformacion',
      ocupacion: 'Tesoros',
      sexo: 'Masculino'
    },
    {
      id: 3,
      nombre: "Leorio Paradinight",
      imagen: "https://i.pinimg.com/236x/6f/02/00/6f020070b684b6753a6f8982dd1ae961.jpg",
      edad: 25,
      personaje: 'Principal',
      aura: 'Emision',
      ocupacion: 'Tesoros',
      sexo: 'Masculino'
    },
    {
      id: 4,
      nombre: "Kurapika",
      imagen: "https://i.pinimg.com/236x/7f/59/ba/7f59ba3853ddf527738c3de1207e1e6c.jpg",
      edad: 19,
      personaje: 'Principal',
      aura: 'Materializacion',
      ocupacion: 'Bestias',
      sexo: 'Masculino'
    }
  ]
}
