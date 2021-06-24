import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reporte-empresa',
  templateUrl: './reporte-empresa.component.html',
  styleUrls: ['./reporte-empresa.component.css']
})
export class ReporteEmpresaComponent implements OnInit {
correo:string =""
asunto:string=""
descripcion:string=""
  constructor() { }

  ngOnInit(): void {
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

  async enviar(){
    console.log(this.correo)
    if(this.correo==""||""==this.asunto||this.descripcion==""){
      alert("Faltan datos")
    }else{
    this.SuccesMessage("Correo enviado!")
    this.correo=this.asunto=this.descripcion=""
    }
  }

  private SuccesMessage(name:string){
    this.message.fire({
      icon:'success',
      title: name
    })
  }

}
