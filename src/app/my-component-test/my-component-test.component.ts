import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-component-test',
  standalone: true,
  imports: [],
  templateUrl: './my-component-test.component.html',
  styleUrl: './my-component-test.component.css'
})
export class MyComponentTestComponent implements OnChanges{
  //@Input({ required: true, alias: 'meu-nome' }) meuNome: string = 'João';
  //@Input({ alias: 'meu-nome' }) meuNome: string = 'João';
  //@Input() meuNome: string = "Severa";
  @Input('meu-nome') meuNome: string = "Severa"
  mensagem = "Adoro comer! 🤤"
  imagem: string = "https://res.cloudinary.com/tf-lab/image/upload/w_3840,c_fill,q_auto,f_auto/restaurant/f804024c-6bea-48ba-aca8-d74914554139/07a313fe-5735-4ace-a9e7-1e0f8c6956c6.jpghttps://res.cloudinary.com/tf-lab/image/upload/w_3840,c_fill,q_auto,f_auto/restaurant/f804024c-6bea-48ba-aca8-d74914554139/07a313fe-5735-4ace-a9e7-1e0f8c6956c6.jpg";

  @Output() mudancaContador: EventEmitter <number> = new EventEmitter <number>;
  contador: number = 0;

  imagens: string[] = [
    'https://res.cloudinary.com/tf-lab/image/upload/w_3840,c_fill,q_auto,f_auto/restaurant/f804024c-6bea-48ba-aca8-d74914554139/07a313fe-5735-4ace-a9e7-1e0f8c6956c6.jpghttps://res.cloudinary.com/tf-lab/image/upload/w_3840,c_fill,q_auto,f_auto/restaurant/f804024c-6bea-48ba-aca8-d74914554139/07a313fe-5735-4ace-a9e7-1e0f8c6956c6.jpg',
    'https://s2.glbimg.com/KLRKhKUo7FxbBruDCpUXiWcMI88=/smart/e.glbimg.com/og/ed/f/original/2019/07/03/mg_4790_butcher.jpg',
    'https://www.evasoes.pt/files/2023/11/DSC06941-1200x800.jpg']

    obj: {id: number; nome: string} = {
      id: 80,
      nome: 'Rita'
    };

    pCorTexto: string = '#336699';
    pCorFundo: string = '#99ccff';
    pAlterarCores: boolean = true;

    ngOnChanges(changes: SimpleChanges) {
      console.log('MeuComponenteComponent.ngOnChanges()', changes);

      if(changes['meuNome']){
        console.log('O nome foi alterado para ' + changes['meuNome'].currentValue)
      }
      if(changes['meuNome2']){
        
      }
    }

  alterarImagem(): void{
    this.imagem = this.imagens[1];
}

alterarImagem2(): void{
  this.imagem = this.imagens[2];
  }

  alterarCor(): void {
    let cor: string = this.pCorTexto;
    this.pCorTexto = this.pCorFundo;
    this.pCorFundo = cor;
  }

  alterarAtivo(): void {
    this.pAlterarCores = false;
  }

  incrementar(): void {
    this.contador++;
    this.mudancaContador.emit(this.contador);
  }
}
