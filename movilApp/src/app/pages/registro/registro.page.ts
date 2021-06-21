import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../model/usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
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

  constructor(private router:Router) { }

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
      window.alert("debe llenar todos los campos de texto")
    }else{
      if(this.confPassword  != this.usuario.password){
        window.alert("las contraseñas no son correctas!!")
      }else{
        window.alert("registro exitoso")
        this.router.navigate([ '/login']);

      }
    }
  }

}
