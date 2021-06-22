import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  misreportes:any = null;

  constructor(private router:Router, private services:UsuarioService, private appComponent: AppComponent) { 
    this.appComponent.update();
  }

  ngOnInit() {
    this.appComponent.update();
    this.services.reporte_x_user(this.services.getIdUser()).subscribe(
      (res:any)=>{
        console.log(res)
        this.misreportes = res;
      }
    );
  }


}

/*
<div *ngFor = "let r of misreportes">
      <ion-item (click)="miReporte(r.idreporte)" detail>
        <ion-label *ngIf = "r.idtipoproblema == 1" ><ion-icon name="car-sport"></ion-icon>baches en la {{r.zona}} </ion-label>
        <ion-label *ngIf = "r.idtipoproblema == 2" ><ion-icon name="footsteps"></ion-icon>exceso de delincuencia en la {{r.zona}} </ion-label>
      </ion-item>
    </div>

  */