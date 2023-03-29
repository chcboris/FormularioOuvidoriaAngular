import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar2(){

    this.router.navigate(['adm']); 
  }

  resultado(){

    this.router.navigate(['adm/resultado']); 
  }
}



