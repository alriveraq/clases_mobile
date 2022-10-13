import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';

import {ApiProductoService} from './../servicio/api-producto.service'

import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports: [ //modulos
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AgregarPage], //componentes
  providers: [ApiProductoService] //servicios, pipes y otros
})
export class AgregarPageModule {}
