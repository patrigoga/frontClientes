import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

clientes: Cliente[] | undefined ;




  constructor(){}


  ngOnInit(){

    this.clientes = CLIENTES;

  }



}
