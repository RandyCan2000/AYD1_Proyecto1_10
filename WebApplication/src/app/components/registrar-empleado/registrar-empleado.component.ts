import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  public User:Empleado;
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
  constructor(private service:ServicesService) {
    this.User = {idempleado:null, tipo:"empleado", apellido:"",nombre:"",telefono:null,correo:"",edad:null,fechanacimiento:"",usuario:"",password:""}
    
  }

  ngOnInit(): void {
  }

  async registrar(){
    /*
    await this.service.RegistrarEmpleado(this.User).then(
      result=>{
      
        this.SuccesMessage("Completo")
        this.User = {idempleado:null, tipo:"empleado", apellido:"",nombre:"",telefono:null,correo:"",edad:null,fechanacimiento:"",usuario:"",password:""}
      }
    )
    */
   console.log(this.User.fechanacimiento)
  }

  
  private SuccesMessage(name:string){
    this.message.fire({
      icon:'success',
      title:`Registro ${name}`
    })
  }


}
