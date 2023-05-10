import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seletor-lgpd',
  templateUrl: './seletor-lgpd.component.html',
  styleUrls: ['./seletor-lgpd.component.css']
})
export class SeletorLGPDComponent implements OnInit {
  sel: number = 0;

  constructor(private router: Router) { 
    this.sel = 0;
  }

  ngOnInit(): void {
    
  }

  selecionou(){
    if (this.sel == 1) {
      console.log(this.sel);
      this.router.navigate(['./lgpd/correcaodp']);
    } else {
        if (this.sel == 2) {
          console.log(this.sel);
          this.router.navigate([ './lgpd/portabilidade']);
        }else{
          if (this.sel == 3){
            console.log(this.sel);
            this.router.navigate(['./lgpd/eliminacaodp']);
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
