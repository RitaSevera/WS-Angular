import { Injectable } from '@angular/core';
import { Icidade } from '../models/cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  // readAll() {
  //   throw new Error('Method not implemented.');
  // }
  // read(idCidade: number): Icidade {
  //   throw new Error('Method not implemented.');
  // }
  cidades: Array<Icidade> = [
    {nome: 'Porto', pais: 'Portugal', populacao: 214349},
    {nome: 'Gaia', pais: 'Portugal', populacao: 300000},
    {nome: 'Aveiro', pais: 'Portugal', populacao: 80.880},
    {nome: 'Braga', pais: 'Portugal', populacao: 196434},
  ]

  constructor() {
  }

  create(novaCidade: Icidade){
    this.cidades.push(novaCidade);
  }
}
