import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  userID: any;

  ngOnInit(): void {
    this.userID = this.activatedRoute.snapshot.paramMap.get("valor");
  }

  voltar(){

    this.router.navigate(['adm']); 
  }
}
