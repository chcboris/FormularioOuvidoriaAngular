import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoOcorrencia } from 'src/app/shared/enum/tipoOcorrencia';
import { Ocorrencia } from 'src/app/shared/model/ocorrencia';

@Component({
  selector: 'app-reclamacao',
  templateUrl: './reclamacao.component.html',
  styleUrls: ['./reclamacao.component.css']
})
export class ReclamacaoComponent implements OnInit {

  reclamacaoForm!: FormGroup;
  ocorrencia:Ocorrencia ={};

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm(this.ocorrencia);
  }

  createForm(ocorrencia: Ocorrencia) {
    this.reclamacaoForm = this.fb.group({
      nomeRG: [ocorrencia.nomeRG,[Validators.required]],
      nomeSocial: [ocorrencia.nomeSocial],
      nascimento: [ocorrencia.nascimento,[Validators.required]],
      nomeMae: [ocorrencia.nomeMae,[Validators.required]],
      titulo: [ocorrencia.titulo],
      sexo: [ocorrencia.sexo,[Validators.required]],
      escolaridade: [ocorrencia.escolaridade,[Validators.required]],
      email: [ocorrencia.email,[Validators.required]],
      cep: [ocorrencia.cep,[Validators.required]],
      estado: [ocorrencia.estado,[Validators.required]],
      cidade: [ocorrencia.cidade,[Validators.required]],
      endereco: [ocorrencia.endereco,[Validators.required]],
      bairro: [ocorrencia.bairro,[Validators.required]],
      local: [ocorrencia.local,[Validators.required]],
      ocorrencia: [ocorrencia.ocorrencia,[Validators.required]]
    })
  }

  Cadastrar(){
    let ocorrencia = this.reclamacaoForm.getRawValue();;
    ocorrencia.tipoOcorrencia = TipoOcorrencia.RECLAMACAO;
    console.table(ocorrencia);
    this.router.navigate(['adm/resultado',100]);
  }
}
