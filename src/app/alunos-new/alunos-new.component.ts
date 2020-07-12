import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from 'src/services/aluno.services';

@Component({
  selector: 'app-alunos-new',
  templateUrl: './alunos-new.component.html',
  styleUrls: ['./alunos-new.component.css']
})
export class AlunosNewComponent implements OnInit {

  formGroup : FormGroup;
  msg : string = null;

  constructor(private alunoServ: AlunoService,
    private formBuilder : FormBuilder) {
      this.iniciarForm();
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

    cadastrar(){

      this.alunoServ.new(this.formGroup.value).subscribe(data=>{
        console.log(data);
        if(data.status===201){
          this.msg = 'Cadastrado com sucesso!';
          this.formGroup.reset();
        
        }
      })
    }

}
