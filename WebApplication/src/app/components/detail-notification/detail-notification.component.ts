import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoProblema } from 'src/app/models/TipoProblema';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.css']
})
export class DetailNotificationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DetailNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:ServicesService
    ) {
      this.service.GetTipoProblemas().then(
        result=>{
          this.TiposProblema = result
        }
      )
    }

  public TiposProblema:TipoProblema[]=[]

  public Images:string[]=[
    "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80",
    "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    "https://images.unsplash.com/photo-1587691592099-24045742c181?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
  ];  
  public numberImage:number=0;

  ObjectView:any={
    idnotificacion:0,
    fechanotificaion:"",
    horanotificacion:"",
    fechaproblema:"",
    horaproblema:"",
    nombrevecino:"",
    descripcion:"",
    estado:"",
    tipoproblema:""
  }

  async ngOnInit() {

    
    let id_vecino = 0;
    await this.service.GetOneReport(this.data.id).then(
      result=>{
        this.ObjectView.idnotificacion=result[0].idreporte
        this.ObjectView.fechanotificaion=result[0].fechareporte
        this.ObjectView.horanotificacion=result[0].horareporte
        this.ObjectView.fechaproblema=result[0].fechaproblema
        this.ObjectView.horaproblema=result[0].horaproblema
        this.ObjectView.descripcion=result[0].descripcion
        this.ObjectView.estado=result[0].estado
        this.ObjectView.tipoproblema=result[0].idtipoproblema
        id_vecino = result[0].idusuario
      }
    )
    await this.service.GetOneUserVecino(String(id_vecino)).then(
      result=>{
        this.ObjectView.nombrevecino = `${result[0].nombre} ${result[0].apellido}`
      }
    )
    await this.service.GetImageOfReport(String(this.ObjectView.idnotificacion)).then(
      result=>{
        this.Images = result
        this.numberImage = 0
      }
    )
  }

  Close(): void {
    this.dialogRef.close();
    
  }

  PreviewImage(){
    this.numberImage = this.numberImage-1 < 0? this.Images.length-1 : this.numberImage - 1 ;
  }

  NextImage(){
    this.numberImage = this.numberImage+1 === this.Images.length? 0 : this.numberImage +1 ;
  }

  async ResponseNotification(){
    const { value: text } = await Swal.fire({
      title: 'Escriba su respuesta',
      input: 'textarea',
      inputLabel: 'Mensaje',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El mensaje no puede estar en blanco'
        }else{

        }
      }
    })
    //Send Menssage
    let user1:any
    user1 = JSON.parse(sessionStorage.getItem("USR_MUN"));
    await this.service.EnviarMensaje({"descripcion":text,"idReporte":this.ObjectView.idnotificacion,"idEmpleado":user1.idempleado}).then(
      result=>{
        this.SuccesMessage("Mensaje Enviado")
      }
    )



    
  }
  private message = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  private SuccesMessage(name:string){
    this.message.fire({
      icon:'success',
      title:`${name}`
    })
  }


  async ActualizarEstado(){
    await this.service.ActualizarEstado({"idReporte":this.ObjectView.idnotificacion,"estado":this.ObjectView.estado}).then(
      result=>{
        this.SuccesMessage(result)
      }
    )

  }
}
