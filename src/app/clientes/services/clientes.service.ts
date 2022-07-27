import { Clientes } from './../model/clientes';
import { ListKeyManager } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { first } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'localhost:8080/clientes'

  constructor( private httpCliente: HttpClient) { }

  listAll(){
    return this.httpCliente.get<Clientes[]>(this.API)
    .pipe(
      first(),
      tap((clientes: any) => {
        return console.log(clientes);
      })
    );
  }
}
