import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';
import { Reporte } from '../models/Reporte';
import { TipoProblema } from '../models/TipoProblema';

@Injectable()
export class ServicesService {

  private API:string = "https://proyecto1-ayd1.herokuapp.com";

  constructor(private http:HttpClient,private route:Router) { }

  public getAllEmpleados():Promise<Empleado>{
    return this.http.get<Empleado>(`${this.API}/empleados`).toPromise()
  }

  public Loguin(user:string,password:string):Promise<Empleado[]>{
    const body = {usuario:user,password:password}
    return this.http.post<Empleado[]>(`${this.API}/login/empleado`,body).toPromise()
  }

  public GetTipoProblemas():Promise<TipoProblema[]>{
    return this.http.get<TipoProblema[]>(`${this.API}/tipoProblemas`).toPromise()
  }

  public GetAllReportes():Promise<any[]>{
    return this.http.get<any[]>(`${this.API}/detalleProblema`).toPromise()
  }

  public GetOneReport(id:string):Promise<Reporte[]>{
    return this.http.get<Reporte[]>(`${this.API}/reporte/${id}`).toPromise()
  }

  public GetOneUserVecino(id:string):Promise<any[]>{
    return this.http.get<any[]>(`${this.API}/usuario/${id}`).toPromise()
  }

  public GetImageOfReport(id:string):Promise<string[]>{
    return this.http.get<string[]>(`${this.API}/imagenReporte/${id}`).toPromise()
  }

  public Verification(){
    const user=sessionStorage.getItem("USR_MUN")
    if(!user){
      this.route.navigate(['login'])
    }
  }

}
