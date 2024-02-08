import { Component, Input } from '@angular/core';
import { Icidade } from '../models/cidade.model';

@Component({
  selector: 'app-minha-lista-item',
  standalone: true,
  imports: [],
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
}
