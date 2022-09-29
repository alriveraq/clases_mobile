import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pokemon } from "./../modelos/pokemon";

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ComponenteComponent implements OnInit {
  @Input() public urlpokemon: string = '';
  public pokemon!: Pokemon;
  constructor(
    private cliente: HttpClient
  ) { }

  ngOnInit() {
    this.cliente.get<Pokemon>(this.urlpokemon)
    .subscribe(resultadoPokemon =>{
      this.pokemon = resultadoPokemon;
    })
  }

}
