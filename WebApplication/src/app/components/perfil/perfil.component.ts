import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public User:Empleado;

  constructor(private service:ServicesService) {
    this.service.Verification()
    this.User = JSON.parse(sessionStorage.getItem("USR_MUN"));
    let spliter = this.User.fechanacimiento.split("/")
    this.User.fechanacimiento = `${spliter[2]}-${spliter[1]}-${spliter[0]}`
  }

  ngOnInit(): void {
  }

}
