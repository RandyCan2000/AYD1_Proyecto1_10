import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  miuser:any = null;

  constructor(private services:UsuarioService) { }

  ngOnInit() {
    this.miuser = this.services.getUsuario();
    console.log(this.miuser)
  }

  btnEliminar(){
    
  }

}
