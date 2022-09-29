import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //servicios
import { ResPeticion } from './modelos/res-peticion';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';
  private resultado: ResPeticion = {
    count: 0,
    results: []
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<ResPeticion>(this.url)
    .subscribe(datosPeticion =>{

      this.resultado = datosPeticion;
      console.log(datosPeticion);
    });
  }

}
