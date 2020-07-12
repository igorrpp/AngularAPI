import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/model/aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/services/aluno.services';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.css']
})
export class AlunosDetalhesComponent implements OnInit {

  dados : Aluno = new Aluno;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunoServ: AlunoService) { 

      this.route.paramMap.subscribe(data=>{
        let id = data.get('id');

        this.alunoServ.buscaById(id).subscribe(data=>{
          this.dados = data;
        })
      })
    }

  ngOnInit(): void {
  }

  excluir(){

    let op = confirm("Deseja Excluir?");

    if(op===true){

    this.alunoServ.delete(this.dados).subscribe(data=>{
      console.log(data);
      this.dados = new Aluno();
    })
  }
  }

}
