import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-animais-item',
  standalone: true,
  imports: [],
  templateUrl: './lista-animais-item.component.html',
  styleUrl: './lista-animais-item.component.css'
})
export class ListaAnimaisItemComponent {
  @Input({required: true}) animais: {nome: string, especie: string, raca: string, idade: number} = {
    nome: '',
    especie: '',
    raca: '',
    idade: 0
  };
}
