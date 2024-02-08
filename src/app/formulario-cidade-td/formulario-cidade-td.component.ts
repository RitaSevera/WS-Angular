import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icidade } from '../models/cidade.model';
import { CidadesService } from '../services/cidades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cidade-td',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-cidade-td.component.html',
  styleUrl: './formulario-cidade-td.component.css'
})
export class FormularioCidadeTdComponent {
  idCidade: number = 0;
  nomeCidade: string = '';
  paisCidade: string = '';
  populacaoCidade: number | undefined  = 0;  //podemos ter mais que um tipo

  constructor(private cidadeService:CidadesService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(){
    this.idCidade = parseInt(this.route.snapshot.paramMap.get('id') ??  '0') ; //ele e uma string e precisa de passar pra nr, dai o parseInt

    if(this.idCidade > 0){
      let cidade: Icidade = this.cidadeService.read(this.idCidade);

      this.nomeCidade = cidade.nome;
      this.paisCidade = cidade.pais;
      this.populacaoCidade = cidade.populacao;
    }

    console.log('id:',this.idCidade);
  }

  formSubmit(){
    console.log('nome',this.nomeCidade)

    let novaCidade: Icidade= {
      id: 0,
      nome:this.nomeCidade,
      pais:this.paisCidade,
      populacao:this.populacaoCidade
    }

    this.cidadeService.create(novaCidade);

    this.router.navigate(['/minha-lista']);
  }
}
