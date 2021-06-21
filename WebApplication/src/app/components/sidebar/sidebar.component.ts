import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit{

  @ViewChild("btn_menu") btn_menu :any;
  constructor(private route:Router) { 

  
  }


  ngOnInit(): void {
    let user1:any
    user1 = JSON.parse(sessionStorage.getItem("USR_MUN"));
    
    if(user1.tipo=="administrador"){
      document.getElementById("element").style.display = "block";
    }else{
      document.getElementById("element").style.display = "none";
    }
  }
  ngAfterViewInit():void{
    const user = sessionStorage.getItem("userMun");
    if(!user){
      //this.btn_menu._disabled=true;
    }
  }

  logout(){
    this.route.navigate(['login'])
    //this.btn_menu._disabled=true;
    sessionStorage.removeItem("USR_MUN")
  }

}
