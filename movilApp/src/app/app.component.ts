import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario:string = "anonimo";
  flag_sesion:boolean = false;

  constructor(private services:UsuarioService) {
    
  }

  update() {
    this.usuario = this.services.getUserName();
    this.flag_sesion = true;
  }

cerrarSesion(){
  this.services.logout();
  this.usuario = "anonimo";
  this.flag_sesion = false;
}

}
