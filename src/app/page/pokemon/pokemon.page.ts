import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Servicio
import {Resultad} from './modelos/resultad'
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  private resultado: Resultad = {
    count: 0,
    results: []
  };
  private url: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {

    this.client.get<Resultad>(this.url)
    .subscribe(datosPeticin => {

      this.resultado = datosPeticin;
      console.log(datosPeticin)
    })
  }

}
