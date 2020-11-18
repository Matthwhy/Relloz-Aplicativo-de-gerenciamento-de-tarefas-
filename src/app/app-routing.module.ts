import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   redirectTo: 'home',
   pathMatch: 'full' 
  },
  { path: 'home',
    loadChildren: './home/home.module#HomePageModule' 
  },
  { path: 'tela-inicial',
    loadChildren: './tela-inicial/tela-inicial.module#TelaInicialPageModule' 
  },
  { path: 'tela-escola', loadChildren: './tela-escola/tela-escola.module#TelaEscolaPageModule' },
  { path: 'tela-esporte', loadChildren: './tela-esporte/tela-esporte.module#TelaEsportePageModule' },
  { path: 'tela-trabalho', loadChildren: './tela-trabalho/tela-trabalho.module#TelaTrabalhoPageModule' },
  { path: 'tela-lazer', loadChildren: './tela-lazer/tela-lazer.module#TelaLazerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
