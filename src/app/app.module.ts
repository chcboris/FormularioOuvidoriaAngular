import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdministrativoModule } from './administrativo/administrativo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrativoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
