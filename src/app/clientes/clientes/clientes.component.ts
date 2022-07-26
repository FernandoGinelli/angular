import { Component, OnInit } from '@angular/core';
import { Clientes } from '../model/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[] = [{
    _id: '1', nome:'eu'
  }];
  displayedColumns = ['nome'];

  constructor() { }

  ngOnInit() {
  }

}
