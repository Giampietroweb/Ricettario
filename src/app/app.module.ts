import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RicetteComponent } from './ricette/ricette.component';
import { ListaRicetteComponent } from './ricette/lista-ricette/lista-ricette.component';
import { SingolaRicettaComponent } from './ricette/lista-ricette/singola-ricetta.component';
import { ricetta } from '././ricetta';
import { DettagliRicettaComponent } from './dettagli-ricetta/dettagli-ricetta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RicetteComponent,
    ListaRicetteComponent,
    SingolaRicettaComponent,
    DettagliRicettaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
