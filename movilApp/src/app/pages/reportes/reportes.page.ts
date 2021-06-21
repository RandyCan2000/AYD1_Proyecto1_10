import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  btnBaches(){
    this.router.navigate(['/baches']);
  }

  btnDelincuencia(){
    this.router.navigate(['/delincuencia']);
  }

}
