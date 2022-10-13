import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  public formulario: FormGroup;
  constructor(
    private formB: FormBuilder
  ) {

    this.formulario = this.formB.group({
      //Parametro 1
      //El valor que esta dentro de atribut "value"
      //Parametro 2
      //Validaciones sincronicas, ejemplo: largo, minimo, valor maximo, es requerido, etc
      apellido: new FormControl('Hola',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      precio: new FormControl(0,[Validators.required, Validators.max(10),Validators.min(4)])
    })

  }

  ngOnInit() {
  }

}
