import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private API:string = "https://proyecto1-ayd1.herokuapp.com";

  constructor(private http:HttpClient,private route:Router) { }

  public getAllEmpleados():Promise<Empleado>{
    return this.http.get<Empleado>(`${this.API}/empleados`).toPromise()
  }

  public Verification(){
    const user=sessionStorage.getItem("USR_MUN")
    if(!user){
      this.route.navigate(['login'])
    }
  }

}
