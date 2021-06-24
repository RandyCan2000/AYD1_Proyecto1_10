import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit{

  @ViewChild("btn_menu") btn_menu :any;
  constructor(private route:Router,private service:ServicesService) { 

  
  }

  badgeCounter:number
  ngOnInit(): void {

     
    setInterval(() => {
      this.badge(); 
      }, 500);
 
    let user1:any
    user1 = JSON.parse(sessionStorage.getItem("USR_MUN"));
    try {
    
    if(user1.tipo=="administrador"){
      document.getElementById("element").style.display = "block";
    }else{
      document.getElementById("element").style.display = "none";
    }
    } catch (error) {
    }
   
  }

  ELEMENT_DATA: any[] = [];
  async badge(){
 let a:number=0
    await this.service.GetAllReportes().then(
      result=>{
        this.ELEMENT_DATA = result
        for (let index = 0; index <  this.ELEMENT_DATA.length; index++) {
          const element =  this.ELEMENT_DATA[index];
          if(this.ELEMENT_DATA[index].estado=="0"){
            a++
          }
          
        }
        this.badgeCounter=a
      
      }
    )
   
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
