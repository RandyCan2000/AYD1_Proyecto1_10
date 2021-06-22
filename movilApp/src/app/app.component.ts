import { Component} from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  usuario:string = "anonimo";
  flag_sesion:boolean = false;

  constructor(private services:UsuarioService, private router:Router) {
    
  }

  

  update() {
    if(this.services.isAnonimo()){
      this.usuario = "anonimo"
      this.flag_sesion = false;
      
    }else{
      this.usuario = this.services.getUserName();
      console.log(this.usuario)
      this.flag_sesion = true;
    }
    
  }

cerrarSesion(){
  this.services.logout();
  this.usuario = "anonimo";
  this.flag_sesion = false;
}

perfil(){
  if(this.services.getIdUser() != 1){
    this.router.navigate(['/perfil'])
  }
}

}
