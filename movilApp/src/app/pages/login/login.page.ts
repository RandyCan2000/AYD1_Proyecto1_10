import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  flag_credencial: boolean = false;
  credenciales: any = {
    usuario: "",
    password: ""
  }

  constructor(private service: UsuarioService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.update();
  }

  btnLogin() {
    if (this.credenciales.usuario != "" && this.credenciales.password != "") {
      this.service.login(this.credenciales).subscribe(
        (res: any) => {
          console.log(res[0]);
          if (res[0] == undefined) {
            //si el usuario no existe
            this.flag_credencial = true;
          } else {
            this.flag_credencial = false;
            this.appComponent.update();
            localStorage.setItem('token', JSON.stringify(res[0]));
            //this.router.navigate(['/reportes'])
            window.location.replace('/reportes');
            
          }
          (<HTMLInputElement>document.getElementById('user')).value = "";
          (<HTMLInputElement>document.getElementById('pass')).value = '';
        },

        err => {
          console.log(err)
        }
      );

    } else {
      alert("debe llenar todos los campos de texto")
    }
  }

}
