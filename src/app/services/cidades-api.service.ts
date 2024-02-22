import { Injectable } from '@angular/core';
import { Icidade } from '../models/cidade.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidades: Array<Icidade> = [
    { id: '', nome: 'Porto', pais: 'Portugal', populacao: 78450 },
    { id: '', nome: 'Aveiro', pais: 'Portugal', populacao: 181494 },
    { id: '', nome: 'Barcelona', pais: 'Espanha', populacao: 1620343 },
    { id: '', nome: 'Paris', pais: 'França', populacao: 2148271 },
    { id: '', nome: 'Berlim', pais: 'Alemanha', populacao: 3645000 }
  ];

  constructor(private http: HttpClient) {
  }

  limparDados() : void {
    this.reporDados();
  }

  reporDados() : void {
    let cidades : Array<Icidade> = [
      { nome: 'Porto', pais: 'Portugal', populacao: 78450 },
      { nome: 'Aveiro', pais: 'Portugal', populacao: 181494 },
      { nome: 'Barcelona', pais: 'Espanha', populacao: 1620343 },
      { nome: 'Paris', pais: 'França', populacao: 2148271 },
      { nome: 'Berlim', pais: 'Alemanha', populacao: 3645000 }
    ];

    cidades.forEach((cidade) => {
      console.log('reporDados().forEach()');

      this.create(cidade).subscribe({
        next: (data) => {
          console.log('create cidade ok');
        },
        error: (error) => {
          console.error('create cidade error');
        },
      })
      });
    }

  create(novaCidade: Icidade): Observable<any> {
    return this.http.post('http://localhost:3000/cidades', novaCidade);
  }

  readAll(): Observable<any> {
    return this.http.get('http://localhost:3000/cidades');
  }

  read(id:string): Observable<any> {
    return this.http.get('http://localhost:3000/cidades/' + id)
  }

  update(cidade: Icidade): Observable<any> {
    return this.http.put('http://localhost:3000/cidades/' + cidade.id, cidade);
 }
  delete(cidade: Icidade): Observable<any> {
    return this.http.delete('http://localhost:3000/cidades/' + cidade.id);
  }
}
