import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startWith } from 'rxjs';
import { AdministrativoComponent } from './administrativo.component';
import { DenunciaComponent } from './denuncia/denuncia.component';
import { ReclamacaoComponent } from './reclamacao/reclamacao.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { SeletorComponent } from './seletor/seletor.component';
import { SugestaoComponent } from './sugestao/sugestao.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrativoComponent,
    children: [
      {
        path: '',
        component: SeletorComponent,
      },
      {
        path: 'denuncia',
        component: DenunciaComponent,
      },
      {
        path: 'sugestao',
        component: SugestaoComponent,
      },
      {
        path: 'reclamacao',
        component: ReclamacaoComponent,
      },
      {
        path: 'resultado',
        component: ResultadoComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativoRoutingModule { }
