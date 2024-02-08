import { Component, Input } from '@angular/core';
import { ListaAnimaisItemComponent } from '../lista-animais-item/lista-animais-item.component';

@Component({
  selector: 'app-lista-animais',
  standalone: true,
  imports: [ListaAnimaisItemComponent],
  templateUrl: './lista-animais.component.html',
  styleUrl: './lista-animais.component.css'
})
export class ListaAnimaisComponent {
  animais: Array<{nome: string, especie: string, raca: string, idade: number}> = [
    {nome: 'Bobi', especie: 'Cão', raca: 'Pinscher', idade: 4},
    {nome: 'Tobias', especie: 'Macaco', raca: 'Orangotango', idade: 20},
    {nome: 'Melman', especie: 'Girafa', raca: 'Piscoçuda', idade: 35},
    {nome: 'Patoso', especie: 'Pato', raca: 'Bravo', idade: 7},
    {nome: 'Eusébio', especie: 'Lontra', raca: 'Marinha', idade: 80},
  ]
}
