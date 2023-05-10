import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lgpd',
  },
  {
    path: 'adm',
    loadChildren: () => import('./administrativo/administrativo.module').then((m) => m.AdministrativoModule),
  },
  {
    path: 'lgpd',
    loadChildren: () => import('./lgpd/lgpd.module').then((l) => l.LgpdModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
