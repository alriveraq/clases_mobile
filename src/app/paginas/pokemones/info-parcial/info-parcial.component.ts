import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './../modelos/pokemon'
@Component({
  selector: 'app-info-parcial',
  templateUrl: './info-parcial.component.html',
  styleUrls: ['./info-parcial.component.scss'],
})
export class InfoParcialComponent implements OnInit {
  @Input() public urlPokemon: string = '';
  public pokemon: Pokemon;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get(this.urlPokemon)
    .subscribe(resultadoPokemon => {
      resultadoPokemon;
    });
  }

}
