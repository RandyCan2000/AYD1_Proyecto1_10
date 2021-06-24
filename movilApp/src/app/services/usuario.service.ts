import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = "https://proyecto1-ayd1.herokuapp.com";
  
  constructor(private http: HttpClient, private router: Router) { }

  getUsers(){
    return this.http.get(`${this.URL}/usuarios`);
  }

  login(envio:any){
    return this.http.post<any>(this.URL + '/login/usuario', envio);
  }

  getUsuario(){
    return JSON.parse(localStorage.getItem('token') + "");           // Retorna un json {id:'1', rol:[]}
  }

  getUserName(){
    if(this.getUsuario() != null){
      return this.getUsuario().usuario;
    }
    
  }

  logout() {
    localStorage.removeItem('token');
    window.location.replace('login')
  }

  getIdUser(){
    if(this.getUsuario() == null){
      return 1;
    }
    return this,this.getUsuario().idusuario;
  }

  reporte_x_user(id:any){
    return this.http.get(`${this.URL}/reporte/${id}`);
  }

  reporte_x_id(id:any){
    return this.http.get(`${this.URL}/reportePorId/${id}`);
  }


  isAnonimo(){
    if(this.getUsuario() != null){
      return false;
    }

    return true;
  }



  registrar(usuario:any){
    return this.http.post<any>(this.URL+'/usuario', usuario);
  }

  nuevoReporte(reporte:any){
    return this.http.post<any>(this.URL+'/reporte', reporte);
  }

  getMensajeXidReporte(id_reporte:any){
    return this.http.get(`${this.URL}/mensaje/${id_reporte}`);
  }

  postImagenes(obj:any):Promise<any>{
    return this.http.post(`${this.URL}/imagenReporte`,obj).toPromise()
  }


}
