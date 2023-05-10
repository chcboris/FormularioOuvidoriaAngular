import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrecaoDPComponent } from './correcao-dp/correcao-dp.component';
import { EliminacaoDPComponent } from './eliminacao-dp/eliminacao-dp.component';
import { PortabilidadeComponent } from './portabilidade/portabilidade.component';
import { SeletorLGPDComponent } from './seletor-lgpd/seletor-lgpd.component';
import { ResultadoLGPDComponent } from './resultado-lgpd/resultado-lgpd.component';
import { LgpdComponent } from './lgpd.component';

const routes: Routes = [
  {
    path: '',
    component: LgpdComponent,
    children: [
      {
        path: '',
        component: SeletorLGPDComponent,
      },
      {
        path: 'correcaodp',
        component: CorrecaoDPComponent,
      },
      {
        path: 'eliminacaodp',
        component: EliminacaoDPComponent,
      },
      {
        path: 'portabilidade',
        component: PortabilidadeComponent,
      },
      {
        path: 'resultadoLGPD/:valor',
        component: ResultadoLGPDComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgpdRoutingModule { }
