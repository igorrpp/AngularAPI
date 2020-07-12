import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosNewComponent } from './alunos-new/alunos-new.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlunoService } from 'src/services/aluno.services';
import { AlunosUpdateComponent } from '../app/alunos-update/alunos-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunosDetalhesComponent,
    AlunosNewComponent,
    AlunosUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '',component: AlunosComponent },
    { path: 'alunos', component: AlunosComponent }, 
    { path: 'alunos/:id', component: AlunosDetalhesComponent },
    { path: 'alunos-update/:id', component: AlunosUpdateComponent},
    { path: 'alunos-new/:id', component : AlunosNewComponent},
    { path: 'alunos-new', component : AlunosNewComponent},

    ])
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
