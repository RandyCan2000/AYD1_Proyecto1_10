import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delincuencia',
  templateUrl: './delincuencia.page.html',
  styleUrls: ['./delincuencia.page.scss'],
})
export class DelincuenciaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  btnRegresar(){
    this.router.navigate(['/reportes'])
  }

}
