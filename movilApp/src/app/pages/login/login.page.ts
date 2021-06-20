import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales:any = {
    usuario:"",
    password:""
  }

  constructor() { }

  ngOnInit() {
  }

  btnLogin(){
    if(this.credenciales.usuario != "" && this.credenciales.password != ""){
      window.alert(this.credenciales.usuario);
    }else{
      alert("debe llenar todos los campos de texto")
    }
  }

}
