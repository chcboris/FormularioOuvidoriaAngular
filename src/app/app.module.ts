import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdministrativoModule } from './administrativo/administrativo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrativoModule,
    //MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/