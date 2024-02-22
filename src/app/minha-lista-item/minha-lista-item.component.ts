import { Component, Input } from '@angular/core';
import { Icidade } from '../models/cidade.model';
import { CidadesService } from '../services/cidades-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-minha-lista-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './minha-lista-item.component.html',
  styleUrl: './minha-lista-item.component.css'
})
export class MinhaListaItemComponent {
  
  @Input({required: true}) cidade: Icidade = {
    id: 0,
    nome: '',
    pais: '',
    populacao: 0
  };

  constructor(private cidadesService: CidadesService){}

  del() {
    this.cidadesService.delete(this.cidade);
  }
}
