import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { ReclamacaoComponent } from './reclamacao/reclamacao.component';
import { AdministrativoComponent } from './administrativo.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { DenunciaComponent } from './denuncia/denuncia.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeletorComponent } from './seletor/seletor.component';
import { ResultadoComponent } from './resultado/resultado.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AdministrativoComponent,
    ReclamacaoComponent,
    SugestaoComponent,
    DenunciaComponent,
    SeletorComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    AdministrativoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    AdministrativoComponent
  ]
})
export class AdministrativoModule { }
