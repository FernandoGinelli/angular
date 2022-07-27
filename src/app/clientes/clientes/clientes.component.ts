import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../model/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Observable <Clientes[]>;

  //clientesService: ClientesService;

  displayedColumns = ['nome'];

  constructor(private clientesService: ClientesService) {

    this.clientes = this.clientesService.listAll()
  }

  ngOnInit() {
  }

}
