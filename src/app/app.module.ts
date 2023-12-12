import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PurgadoresComponent } from './purgadores/purgadores/purgadores.component';
import { RedutorasComponent } from './redutoras/redutoras/redutoras.component';
import { ControleComponent } from './controle/controle/controle.component';
import { SegurancaComponent } from './seguranca/seguranca/seguranca.component';
import { FiltroComponent } from './filtro/filtro/filtro.component';
import { CosumoComponent } from './cosumo/cosumo/cosumo.component';
import { BombaComponent } from './bomba/bomba/bomba.component';
import { TanqueFlashComponent } from './tanqueFlash/tanque-flash/tanque-flash.component';
import { VaporSaturadoComponent } from './vaporSaturado/vapor-saturado/vapor-saturado.component';
import { AutoOperadaComponent } from './redutoras/autoOperada/auto-operada/auto-operada.component';
import { AcaoDiretaComponent } from './redutoras/acaoDireta/acao-direta/acao-direta.component';
import { FluidoAutoOperadaComponent } from './redutoras/autoOperada/fluido-auto-operada/fluido-auto-operada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PurgadoresComponent,
    RedutorasComponent,
    ControleComponent,
    SegurancaComponent,
    FiltroComponent,
    CosumoComponent,
    BombaComponent,
    TanqueFlashComponent,
    VaporSaturadoComponent,
    AutoOperadaComponent,
    AcaoDiretaComponent,
    FluidoAutoOperadaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
