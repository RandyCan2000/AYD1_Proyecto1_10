import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporte } from './../../model/reporte';

//plugin

@Component({
  selector: 'app-baches',
  templateUrl: './baches.page.html',
  styleUrls: ['./baches.page.scss'],
})
export class BachesPage implements OnInit {
  reporte: Reporte = {
    zona: "",
    fechaReporte: "",
    horaReporte: "",
    fechaProblema: Date.toString(),
    horaProblema: Date.toString(),
    descripcion: "",
    idTipoProblema: 0,
    idUsuario: 0
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnRegresar() {
    this.router.navigate(['/reportes'])
  }

  abrirGaleria() {
    
  }

}
