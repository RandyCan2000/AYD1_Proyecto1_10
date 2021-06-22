import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mireporte',
  templateUrl: './mireporte.page.html',
  styleUrls: ['./mireporte.page.scss'],
})
export class MireportePage implements OnInit {
  notificaion:any = null;
  user:string = "";
  tipo_reporte = "";
  mireporte:any = null;

  constructor(private router:Router, private activeRoute: ActivatedRoute, private services:UsuarioService) { }

  ngOnInit() {
    let id_reporte = this.activeRoute.snapshot.paramMap.get('id');
    let iduser = this.services.getIdUser()
    if(iduser == 1){
      this.user = "anonimo";
    }else{
      this.user = this.services.getUserName();
      console.log(this.user)
    }

    this.services.reporte_x_id(id_reporte).subscribe(
      (res:any)=>{
        /* obtener reporte por id */
        console.log(res[0]);
        this.mireporte = res[0];
        if(res[0].idtipoproblema == 1){
          this.tipo_reporte = "baches en las calles"
        }else{
          this.tipo_reporte = "actos de delincuencia"
        }
         
        //digamos que se obtiene el id del reporte id:1
        /* ahora se hace otra peticion para obtener los mensajes */
        this.services.getMensajeXidReporte(id_reporte).subscribe(
          (res:any)=>{
            console.log(res);
            this.notificaion = res;
          }
        );
      }
    );
  }


  btnEliminar(){
    window.location.replace('/reportes');
  }

  btnBack(){
    window.location.replace('/reportes');
  }

}
