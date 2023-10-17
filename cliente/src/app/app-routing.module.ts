import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/cliente.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesAgGridComponent } from './clientes/clientes-ag-grid/clientes-ag-grid.component';

const routes: Routes = [

  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path:'clientes', component: ClientesComponent},
  {path: 'clientesaggrid', component: ClientesAgGridComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
