import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {
  sel: number = 0;

  constructor(private router: Router) { 
    this.sel = 0;
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
          if (this.sel == 3){
            console.log(this.sel);
            this.router.navigate(['./adm/reclamacao']);
          }
        }
    }
   }

   voltar(){
    this.sel = 1;
    this.router.navigate(['']); 
    this.selecionou;
 }

}
