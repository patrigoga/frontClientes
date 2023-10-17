import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { HeaderComponent } from './clientes/header/header.component';
import { ClientesAgGridComponent } from './clientes/clientes-ag-grid/clientes-ag-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    ClientesAgGridComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
