import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit{

  @ViewChild("btn_menu") btn_menu :any;
  constructor(private render:Renderer2) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit():void{
    const user = sessionStorage.getItem("userMun");
    if(!user){
      //this.btn_menu._disabled=true;
    }
  }

}
