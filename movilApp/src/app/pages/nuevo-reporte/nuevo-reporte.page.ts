import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Reporte } from '../../model/reporte'
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-nuevo-reporte',
  templateUrl: './nuevo-reporte.page.html',
  styleUrls: ['./nuevo-reporte.page.scss'],
})
export class NuevoReportePage implements OnInit {
  nombre_reporte = "";
  flag_campo: boolean = false;
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

  constructor(private router: Router, private services: UsuarioService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = +this.activeRoute.snapshot.paramMap.get('id');
    this.reporte.idTipoProblema = id;
    if (id == 1) {
      this.nombre_reporte = "reporte baches en las calles";
    } else {
      this.nombre_reporte = "reporte de delincuencia"
    }

  }

  reportar() {
    this.time();
    this.reporte.idUsuario = this.services.getIdUser();

    if (this.reporte.zona == "" ||
      this.reporte.fechaProblema == "" ||
      this.reporte.horaProblema == "" ||
      this.reporte.descripcion == "") {
      this.flag_campo = true;
    } else {
      this.flag_campo = false;
      console.log(this.reporte)
      this.services.nuevoReporte(this.reporte).subscribe(
        (res: any) => {
          console.log(res.idReporte);
          //listo para guardar imagenes
          //window.location.replace('/reportes')
        }
      );
    }


  }


  private time() {
    let chartTime: any = new Date();
    chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes());
    let horaActual = chartTime;
    this.reporte.horaReporte = horaActual;

    let dateTime: any = new Date();
    dateTime = dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getDate();
    let fechaActual = dateTime;
    this.reporte.fechaReporte = fechaActual;
  }


}
