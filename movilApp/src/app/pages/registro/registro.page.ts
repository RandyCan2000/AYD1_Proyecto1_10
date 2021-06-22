import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../model/usuario'
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  flag_campo:boolean = false;
  flag_pass:boolean = false;
  usuario:Usuario = {
    nombre:"",
    apellido:"",
    telefono: "",
    edad: 0,
    fechaNacimiento: Date.toString(),     
    correo: "", 
    usuario: "", 
    password: "" 
  }

  public confPassword:string = "";

  constructor(private router:Router, private services:UsuarioService) {

   }

  ngOnInit() {
  }

  btnRegistrar(){
    
    if(this.usuario.fechaNacimiento == "function Date() { [native code] }" || 
    this.usuario.edad == 0 ||
    this.usuario.nombre == "" ||
    this.usuario.apellido == "" ||
    this.usuario.telefono == "" ||
    this.usuario.correo == "" ||
    this.usuario.usuario == "" ||
    this.usuario.password == "" ||
    this.confPassword == ""){
      this.flag_campo = true;
      this.flag_pass = false;
    }else{
      if(this.confPassword  != this.usuario.password){
        this.flag_pass = true;
        this.flag_campo = false;
      }else{
        

        this.services.registrar(this.usuario).subscribe(
          (res:any)=> {
            console.log(res);
            window.alert("registro exitoso")
            this.flag_pass = false;
            this.flag_campo = false;
            this.resetCampos();
            this.router.navigate([ '/login']);
          },
          err => {
            console.log(err)
          }
        );

      }
    }
  }


  resetCampos(){
    for (let index = 1; index < 10; index++) {
      (<HTMLInputElement>document.getElementById(''+index)).value = "";
      
    }
    
  }

}
