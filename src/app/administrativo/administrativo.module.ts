import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { ReclamacaoComponent } from './reclamacao/reclamacao.component';
import { AdministrativoComponent } from './administrativo.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ReclamacaoComponent,
    AdministrativoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AdministrativoRoutingModule
  ],
  exports:[
    AdministrativoComponent
  ]
})
export class AdministrativoModule { }
