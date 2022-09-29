import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//lazy Loading
const routes: Routes = [
  {
    path:'',loadChildren: () => import('./paginas/pokemones/pokemones.module').then(m => m.PokemonesPageModule)
  },
  {
    path:':nomPokemon',loadChildren: () => import('./paginas/detalle-pokemon/detalle-pokemon.module').then(m=> m.DetallePokemonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
