import { Component } from '@angular/core';
import { CidadesService } from '../services/cidades-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Icidade } from '../models/cidade.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-api',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [CidadesService],
  templateUrl: './form-api.component.html',
  styleUrl: './form-api.component.css'
})
export class FormApiComponent {

  form: FormGroup;

  minhaCidade: Icidade = {
    id: '',
    nome: '',
    pais: ''
  }

  constructor(private cidadesService: CidadesService, private route:ActivatedRoute, private router:Router, private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      nome:['', Validators.required],
      pais:['', Validators.required],
      populacao:[0, Validators.min(1000), Validators.max(10000)],
    })
  }

    ngOnInit() {
      this.minhaCidade.id = (this.route.snapshot.paramMap.get('id') ?? '');
      console.log('id:', this.minhaCidade.id);

      if(this.minhaCidade.id){
        this.cidadesService.read(this.minhaCidade.id).subscribe((cidade) => {
          console.log(cidade);
          this.minhaCidade = cidade;
          this.form.controls['nome'].setValue(cidade.nome);
          this.form.controls['pais'].setValue(cidade.pais);
          this.form.controls['populacao'].setValue(cidade.populacao);
        })
      }
    }

    formSubmit() {
      if(this.form.invalid){
        //não faz nada
      }else{
        if(this.minhaCidade.id){
          this.cidadesService.update({
            id: this.minhaCidade.id,
            nome: this.form.controls['nome'].getRawValue(),
            pais: this.form.controls['pais'].getRawValue(),
            populacao: this.form.controls['populacao'].getRawValue()
          }).subscribe({
            next: (data) => {
            console.log('Foi editado');
            this.router.navigate(['/minha-lista'])
          },
          error: (error) => { console.error('Não foi editado')
          alert('Erro ao editar')
      }
    });
        }else{
        }
        // editar cidade
        // ou criar cidade
      }
    }
}
