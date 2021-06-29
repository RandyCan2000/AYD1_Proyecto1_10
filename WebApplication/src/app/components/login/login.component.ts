import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  autentication = { user:"",password:""}
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

  constructor(private route:Router,private Service:ServicesService) {
    if(sessionStorage.getItem("USR_MUN")){
      window.location.reload()
      this.route.navigate(['perfil'])
    }
    this.Service.prueba().then(
      result=>{
        console.log(result);
      }
    )
  }

  ngOnInit(): void {
  }

  public async Loguearse(){
    let user:Empleado[];
    if(this.autentication.user=="admin" &&this.autentication.password=="admin" ){

      sessionStorage.setItem("USR_MUN",JSON.stringify({"usuario":"admin","nombre":"admin","apellido":"admin","tipo":"administrador","fechanacimiento":"01/01/2021"}))
     
      this.SuccesMessage("Administrador")
       this.route.navigate(['perfil'])
    }else{
      
  
    await this.Service.Loguin(this.autentication.user,this.autentication.password).then(
      result=>{
        user = result;
      }
    )
    if(user.length === 0){
      this.ErrorMessage()
    }else{
      sessionStorage.setItem("USR_MUN",JSON.stringify(user[0]))
    
      this.SuccesMessage(user[0].nombre)
      this.route.navigate(['perfil'])
    }

  }
    //sesion storage USR_MUN
  }

  private ErrorMessage(){
    this.message.fire({
      icon:'error',
      title:"Error Usuario no Encontrado"
    })
  }

  private SuccesMessage(name:string){
    this.message.fire({
      icon:'success',
      title:`Bienvenido ${name}`
    })
  }

}
