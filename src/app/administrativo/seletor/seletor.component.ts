import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {
  sel: number = 1;

  constructor(private router: Router) { 
    this.sel = 1;
  }

  ngOnInit(): void {
    
  }

  selecionou(){
    if (this.sel == 1) {
      console.log(this.sel);
      this.router.navigate(['./adm/denuncia']);
    } else {
        if (this.sel == 2) {
          console.log(this.sel);
          this.router.navigate([ './adm/sugestao']);
        }else{
          console.log(this.sel);
          this.router.navigate(['./adm/reclamacao']);
        }
    }
   }

   voltar(){
    this.sel = 1;
    this.router.navigate(['']); 
    this.selecionou;
 }

}
