import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.css']
})
export class DetailNotificationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DetailNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  public Images:string[]=[
    "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80",
    "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    "https://images.unsplash.com/photo-1587691592099-24045742c181?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
  ];  
  public numberImage:number=0;

  ngOnInit(): void {
  }

  Close(): void {
    this.dialogRef.close();
  }

  PreviewImage(){
    this.numberImage = this.numberImage-1 < 0? this.Images.length-1 : this.numberImage - 1 ;
  }

  NextImage(){
    this.numberImage = this.numberImage+1 === this.Images.length? 0 : this.numberImage +1 ;
  }
}
