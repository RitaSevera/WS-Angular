// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './segunda-pagina.component.html',
  styleUrl: './segunda-pagina.component.css'
})
export class SegundaPaginaComponent {
  // arr: Array<string> = [
  //   'João',
  //   'Natana',
  //   'Átylla',
  //   'Joana',
  //   'Ricardo'
  // ]

}
