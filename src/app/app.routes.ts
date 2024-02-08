import { Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { SegundaAaaPaginaComponent } from './segunda-aaa-pagina/segunda-aaa-pagina.component';
import { SegundaBbbPaginaComponent } from './segunda-bbb-pagina/segunda-bbb-pagina.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MinhaListaComponent } from './minha-lista/minha-lista.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { FormularioCidadeTdComponent } from './formulario-cidade-td/formulario-cidade-td.component';


export const routes: Routes = [
  {path: 'primeira',
  title: 'Primeira página',
  component: PrimeiraPaginaComponent},

  {path: 'seguda',
  title: 'Segunda Página',
  component: SegundaPaginaComponent,
  children: [
    {
      path: 'aaa',
      title: 'Aaa | Segunda página',
      component: SegundaAaaPaginaComponent,
    },
    {
      path: 'bbb',
      title: 'Bbb | Segunda página',
      component: SegundaBbbPaginaComponent,
    },
  ],
},

  {path: 'minha-lista', title: 'A minha lista', component: MinhaListaComponent},

  {path: 'lista-animais', title: 'Lista Animais', component: ListaAnimaisComponent},

  {path: 'formulario-cidade-td', title: 'Formulário Cidade', component: FormularioCidadeTdComponent},

  {path: '', redirectTo: '/primeira', pathMatch: 'full'},


  { path: '**', title: '404 - Página não encontrada', component: NotFoundComponent, }
];
