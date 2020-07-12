
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from 'src/services/aluno.services';
import { Aluno } from 'src/model/aluno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-update',
  templateUrl: './alunos-update.component.html',
  styleUrls: ['./alunos-update.component.css']
})
export class AlunosUpdateComponent implements OnInit {

  formGroup : FormGroup;
  aluno : Aluno = new Aluno();
  msg : string = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunoServ: AlunoService,
    private formBuilder : FormBuilder) { 
      this.iniciarForm();

      this.route.paramMap.subscribe(data=>{
        
        let id = data.get('id');

        this.alunoServ.buscaById(id).subscribe(data=>{
          this.aluno = data;
        })
      })
    }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup = this.formBuilder.group({
      matricula: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(100)]],
      dataNascimento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    })
  }
  atualizar(){
    this.alunoServ.update(this.aluno).subscribe(data=>{
      if(data.status===200){
        this.msg = 'Atualizado com sucesso!';
      }else{
        this.msg = "Falha ao 'Atualizar'"
      }
    })

  }


}
