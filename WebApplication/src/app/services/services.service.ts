import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';
import { Reporte } from '../models/Reporte';
import { TipoProblema } from '../models/TipoProblema';

@Injectable()
export class ServicesService {

  private API:string = "http://34.69.23.151:3001";


  constructor(private http:HttpClient,private route:Router) { }

  public prueba():Observable<any>{
    return this.http.get<any>(`${this.API}/usuarios`)
  }

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
    return this.http.get<Reporte[]>(`${this.API}/reportePorId/${id}`).toPromise()
  }

  public GetOneUserVecino(id:string):Promise<any[]>{
    return this.http.get<any[]>(`${this.API}/usuario/${id}`).toPromise()
  }

  public GetImageOfReport(id:string):Promise<string[]>{
    return this.http.get<string[]>(`${this.API}/imagenReporteId/${id}`).toPromise()
  }

  public Verification(){
    const user=sessionStorage.getItem("USR_MUN")
    if(!user){
      this.route.navigate(['login'])
    }
  }

  public RegistrarEmpleado(body:any):any{
    return this.http.post<string[]>(`${this.API}/empleado`,body).toPromise()
  }
  public EnviarMensaje(body:any):any{
    return this.http.post<string[]>(`${this.API}/mensaje`,body).toPromise()
  }

  public ActualizarEstado(body:any):any{
    return this.http.put<string[]>(`${this.API}/reporteActualizar`,body).toPromise()
  }
}
