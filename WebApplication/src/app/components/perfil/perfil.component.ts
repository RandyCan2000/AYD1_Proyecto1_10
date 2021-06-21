import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServicesService } from 'src/app/services/services.service';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public User:Empleado;

  constructor(private service:ServicesService,private comp: SidebarComponent ) {
    comp.ngOnInit()
    this.User = JSON.parse(sessionStorage.getItem("USR_MUN"));
    if(this.User.tipo=="Administrador"){
      let spliter = this.User.fechanacimiento.split("/")
    this.User.fechanacimiento = `${spliter[2]}-${spliter[1]}-${spliter[0]}`

    }else{
    this.service.Verification()
    this.User = JSON.parse(sessionStorage.getItem("USR_MUN"));
    let spliter = this.User.fechanacimiento.split("/")

    if(spliter.length==1){
     
    }else{
    this.User.fechanacimiento = `${spliter[2]}-${spliter[1]}-${spliter[0]}`
    }
 
    }
  }

  ngOnInit(): void {
   
  }

}
