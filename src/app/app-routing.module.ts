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
import { AutoOperadaComponent } from './redutoras/autoOperada/auto-operada/auto-operada.component';
import { AcaoDiretaComponent } from './redutoras/acaoDireta/acao-direta/acao-direta.component';
import { FluidoAutoOperadaComponent } from './redutoras/autoOperada/fluido-auto-operada/fluido-auto-operada.component';


const routes: Routes = [

  {path:'', component: HomeComponent },
  {path:'purgadores', component: PurgadoresComponent},
  {
    path:'redutora', component: RedutorasComponent,
    children: [
      {path:'autoOperada', component: AutoOperadaComponent,
      children:[
        {path:'fluidoAutoOperada', component: FluidoAutoOperadaComponent}
      ]
      },
      {path:'acaoDireta', component: AcaoDiretaComponent}
    ]
  },
  {path:'controle', component: ControleComponent},
  {path:'seguranca', component: SegurancaComponent},
  {path:'filtro', component: FiltroComponent},
  {path:'consumo', component: CosumoComponent },
  {path:'bomba', component: BombaComponent},
  {path:'flash', component: TanqueFlashComponent},
  {path:'tabela', component: VaporSaturadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
