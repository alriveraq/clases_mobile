import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/pokemon/pokemon.module').then(p => p.PokemonPageModule)
  },
  {
    path: ':npokemon',
    loadChildren: () => import('./page/detalle-pokemon/detalle-pokemon.module').then(dp => dp.DetallePokemonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
