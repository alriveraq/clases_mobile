import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiProductoService } from './../servicio/api-producto.service';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';

@NgModule({
  imports: [ // todos los modulos
    CommonModule,
    IonicModule,
    AgregarPageRoutingModule,
    ReactiveFormsModule // <- para crear formularios
  ],
  declarations: [AgregarPage], // todos los componentes
  providers: [ApiProductoService] // los servicios, pipes y otras directivas
})
export class AgregarPageModule {}
