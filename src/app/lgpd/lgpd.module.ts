import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgpdRoutingModule } from './lgpd-routing.module';
import { LgpdComponent } from './lgpd.component';
import { PortabilidadeComponent } from './portabilidade/portabilidade.component';
import { CorrecaoDPComponent } from './correcao-dp/correcao-dp.component';
import { EliminacaoDPComponent } from './eliminacao-dp/eliminacao-dp.component';
import { SeletorLGPDComponent } from './seletor-lgpd/seletor-lgpd.component';
import { ResultadoLGPDComponent } from './resultado-lgpd/resultado-lgpd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

@NgModule({
  declarations: [
    LgpdComponent,
    PortabilidadeComponent,
    CorrecaoDPComponent,
    EliminacaoDPComponent,
    SeletorLGPDComponent,
    ResultadoLGPDComponent
  ],
  imports: [    
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    CommonModule,
    LgpdRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LgpdComponent
  ]
})
export class LgpdModule { }
