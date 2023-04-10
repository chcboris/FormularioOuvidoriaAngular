import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Reclamacao } from 'src/app/shared/model/reclamacao';


@Component({
  selector: 'app-reclamacao',
  templateUrl: './reclamacao.component.html',
  styleUrls: ['./reclamacao.component.css']
})
export class ReclamacaoComponent implements OnInit {

  reclamacaoForm!: FormGroup;
  reclamacao:Reclamacao ={};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(this.reclamacao);
  }

  createForm(reclamacao: Reclamacao) {
    this.reclamacaoForm = this.fb.group({
      nomeRG: [reclamacao.nomeRG,[Validators.required]],
      nomeSocial: [reclamacao.nomeSocial],
      nascimento: [reclamacao.nascimento,[Validators.required]],
      nomeMae: [reclamacao.nomeMae,[Validators.required]],
      titulo: [reclamacao.titulo],
      sexo: [reclamacao.sexo,[Validators.required]],
      escolaridade: [reclamacao.escolaridade,[Validators.required]],
      email: [reclamacao.email,[Validators.required]],
      cep: [reclamacao.cep,[Validators.required]],
      estado: [reclamacao.estado,[Validators.required]],
      cidade: [reclamacao.cidade,[Validators.required]],
      endereco: [reclamacao.endereco,[Validators.required]],
      bairro: [reclamacao.bairro,[Validators.required]],
      local: [reclamacao.local,[Validators.required]],
      ocorrencia: [reclamacao.ocorrencia,[Validators.required]],

    })
  }
}
