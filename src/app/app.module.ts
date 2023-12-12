import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RedutorasComponent } from './redutoras/redutoras/redutoras.component';
import { ControleComponent } from './controle/controle/controle.component';
import { SegurancaComponent } from './seguranca/seguranca/seguranca.component';
import { FiltroComponent } from './filtro/filtro/filtro.component';
import { CosumoComponent } from './cosumo/cosumo/cosumo.component';
import { BombaComponent } from './bomba/bomba/bomba.component';
import { TanqueFlashComponent } from './tanqueFlash/tanque-flash/tanque-flash.component';
import { VaporSaturadoComponent } from './vaporSaturado/vapor-saturado/vapor-saturado.component';

import { AcaoDiretaVaporComponent } from './redutoras/acaoDireta/acao-direta-vapor/acao-direta-vapor.component';
import { AcaoDiretaArComprimidoComponent } from './redutoras/acaoDireta/acao-direta-ar-comprimido/acao-direta-ar-comprimido.component';
import { AcaoDiretaAguaComponent } from './redutoras/acaoDireta/acao-direta-agua/acao-direta-agua.component';
import { AcaoDiretaHomeComponent } from './redutoras/acaoDireta/acao-direta-home/acao-direta-home.component';
import { AutoOperadaHomeComponent } from './redutoras/autoOperada/auto-operada-home/auto-operada-home.component';
import { AutoOperadaVaporComponent } from './redutoras/autoOperada/auto-operada-vapor/auto-operada-vapor.component';
import { AutoOperadaArComprimidoComponent } from './redutoras/autoOperada/auto-operada-ar-comprimido/auto-operada-ar-comprimido.component';
import { AutoOperadaAguaComponent } from './redutoras/autoOperada/auto-operada-agua/auto-operada-agua.component';
import { PurgadoresComponent } from './purgadores/purgadores/purgadores.component';
import { TipoBoiaComponent } from './purgadores/tipo-boia/tipo-boia.component';
import { TermodinamicoComponent } from './purgadores/termodinamico/termodinamico.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
 
    RedutorasComponent,
    ControleComponent,
    SegurancaComponent,
    FiltroComponent,
    CosumoComponent,
    BombaComponent,
    TanqueFlashComponent,
    VaporSaturadoComponent,
    
    AcaoDiretaVaporComponent,
    AcaoDiretaArComprimidoComponent,
    AcaoDiretaAguaComponent,
    AcaoDiretaHomeComponent,
    AutoOperadaHomeComponent,
    AutoOperadaVaporComponent,
    AutoOperadaArComprimidoComponent,
    AutoOperadaAguaComponent,
    PurgadoresComponent,
    TipoBoiaComponent,
    TermodinamicoComponent,

    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
