import { Component } from '@angular/core';
import { MyComponentTestComponent } from "../my-component-test/my-component-test.component";

@Component({
    selector: 'app-primeira-pagina',
    standalone: true,
    templateUrl: './primeira-pagina.component.html',
    styleUrl: './primeira-pagina.component.css',
    imports: [MyComponentTestComponent]
})
export class PrimeiraPaginaComponent {
    meuNomePai: string = 'Joaquim';

    contadorPAI: number = 0;

    atualizar(valor: number): void {
      this.contadorPAI = valor;
    }

    changeMeuNomePai() {
      this.meuNomePai = 'Isi'
    }
}
