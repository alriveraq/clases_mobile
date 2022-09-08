import { Component } from '@angular/core';
import { Perros } from 'src/modelos/perros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaPerros: Array<Perros> = [
    {
      nombre: "Copo",
      foto: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Racib%C3%B3rz_2007_082.jpg' ,
      raza: 'Bulldog',
      color:'Otro',
      edad: 10
    },
    {
      nombre: "Pedri",
      foto: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Golden_Retriever_9-year_old.jpg' ,
      raza: 'Golden',
      color:'Otro',
      edad: 11
    },
    {
      nombre: "Firulais",
      foto: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/60263281_421831861974225_331776474040238080_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7ESUQK4rRIUAX-amTcQ&_nc_ht=scontent-scl2-1.xx&oh=00_AT-VkOWMtDz3ADKTuZLgjj1YeskXiNt3jlPPHFLtuVb02g&oe=63402D60' ,
      raza: 'Mestizo',
      color:'Otro',
      edad: 5
    },
    {
      nombre: "Ghost",
      foto: 'https://peru21.pe/resizer/WsjYPoz57_xk2-rq094Nm21rfVQ=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/JRINBO53JNCJJJIVTKTUKON3QA.jpg' ,
      raza: 'Husky',
      color:'Blanco',
      edad: 6
    }
  ]

}
