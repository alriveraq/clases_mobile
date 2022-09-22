import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((m)=> m.LandingPageModule)
  },

  {
    path: 'acerca-de',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutPageModule)
  },

  {
    path:'login',
    loadChildren: () => import('./login/login.module').then((m)=> m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
