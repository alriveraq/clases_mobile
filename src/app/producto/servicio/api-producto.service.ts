import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Producto, ProductoConId} from './../modelo/producto'

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {

  private URL_PRODUCTO = 'http://localhost:3000/productos'

  constructor(
    private cliente: HttpClient
  ) { }

  public agregarProducto(producto: Producto){
    return this.cliente.post(this.URL_PRODUCTO, producto, {
      headers:{
        'Content-Type':'application/json;charset=utf8'
      }
    })
  }

  public listarPrimerosElementos(){
    this.cliente.get(`${this.URL_PRODUCTO}?_limit=1&_page=1`)
  }

}
