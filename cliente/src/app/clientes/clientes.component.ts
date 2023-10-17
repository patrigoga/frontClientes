import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

clientes: Cliente[] | undefined ;




  constructor(private clienteservice: ClienteService){}


  ngOnInit(){

  this.clienteservice.getClientes().subscribe( clientes => this.clientes = clientes);

  }



}
