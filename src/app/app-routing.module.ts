import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurgadoresComponent } from './purgadores/purgadores/purgadores.component';
import { RedutorasComponent } from './redutoras/redutoras/redutoras.component';
import { ControleComponent } from './controle/controle/controle.component';
import { SegurancaComponent } from './seguranca/seguranca/seguranca.component';
import { FiltroComponent } from './filtro/filtro/filtro.component';
import { CosumoComponent } from './cosumo/cosumo/cosumo.component';
import { BombaComponent } from './bomba/bomba/bomba.component';
import { TanqueFlashComponent } from './tanqueFlash/tanque-flash/tanque-flash.component';
import { VaporSaturadoComponent } from './vaporSaturado/vapor-saturado/vapor-saturado.component';
import { AcaoDiretaHomeComponent } from './redutoras/acaoDireta/acao-direta-home/acao-direta-home.component';
import { AutoOperadaHomeComponent } from './redutoras/autoOperada/auto-operada-home/auto-operada-home.component';
import { AcaoDiretaVaporComponent } from './redutoras/acaoDireta/acao-direta-vapor/acao-direta-vapor.component';
import { AcaoDiretaAguaComponent } from './redutoras/acaoDireta/acao-direta-agua/acao-direta-agua.component';
import { AcaoDiretaArComprimidoComponent } from './redutoras/acaoDireta/acao-direta-ar-comprimido/acao-direta-ar-comprimido.component';
import { AutoOperadaVaporComponent } from './redutoras/autoOperada/auto-operada-vapor/auto-operada-vapor.component';
import { AutoOperadaAguaComponent } from './redutoras/autoOperada/auto-operada-agua/auto-operada-agua.component';
import { AutoOperadaArComprimidoComponent } from './redutoras/autoOperada/auto-operada-ar-comprimido/auto-operada-ar-comprimido.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'purgadores', component: PurgadoresComponent },


  { path: 'redutora', component: RedutorasComponent, },

      { path: 'acaoDireta', component: AcaoDiretaHomeComponent},  
          { path: 'vaporAcaoDireta', component: AcaoDiretaVaporComponent },
          { path: 'arComprimidoAcaoDireta', component: AcaoDiretaArComprimidoComponent },
          { path: 'aguaAcaoDireta', component: AcaoDiretaAguaComponent },

      { path: 'autoOperada', component: AutoOperadaHomeComponent},
          { path: 'vaporAutoOperada', component: AutoOperadaVaporComponent },
          { path: 'aguaAutoOperada', component: AutoOperadaAguaComponent },
          { path: 'arComprimidoAutoOperada', component: AutoOperadaArComprimidoComponent },

  { path: 'controle', component: ControleComponent },
  { path: 'seguranca', component: SegurancaComponent },
  { path: 'filtro', component: FiltroComponent },
  { path: 'consumo', component: CosumoComponent },
  { path: 'bomba', component: BombaComponent },
  { path: 'flash', component: TanqueFlashComponent },
  { path: 'tabela', component: VaporSaturadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
