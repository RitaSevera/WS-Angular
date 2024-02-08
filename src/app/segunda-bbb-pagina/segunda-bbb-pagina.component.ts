import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-bbb-pagina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segunda-bbb-pagina.component.html',
  styleUrl: './segunda-bbb-pagina.component.scss'
})
export class SegundaBbbPaginaComponent {
  arr: Array<string> = [
    'Rita',
    'Nuno',
    'João',
    'Renata',
    'Vicente'
  ]
}
