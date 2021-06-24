import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Reporte } from '../../model/reporte'
import { UsuarioService } from '../../services/usuario.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx'
import { finalize } from 'rxjs/operators'
@Component({
  selector: 'app-nuevo-reporte',
  templateUrl: './nuevo-reporte.page.html',
  styleUrls: ['./nuevo-reporte.page.scss'],
})
export class NuevoReportePage implements OnInit {
  nombre_reporte = "";
  flag_campo: boolean = false;
  flag_campo_2: boolean = false;
  reporte: Reporte = {
    zona: "",
    fechaReporte: "",
    horaReporte: "",
    fechaProblema: Date.toString(),
    horaProblema: Date.toString(),
    descripcion: "",
    idTipoProblema: 0,
    idUsuario: 0
  }

  images:any[]=[]
  urlImages:any[]=[]

  constructor(
    private router: Router, 
    private services: UsuarioService, 
    private activeRoute: ActivatedRoute,
    private storage: AngularFireStorage,
    public imagePicker:ImagePicker
    ) { }

  ngOnInit() {
    let id: number = +this.activeRoute.snapshot.paramMap.get('id');
    this.reporte.idTipoProblema = id;
    if (id == 1) {
      this.nombre_reporte = "reporte baches en las calles";
    } else {
      this.nombre_reporte = "reporte de delincuencia"
    }

  }

  reportar() {
    this.time();
    this.reporte.idUsuario = this.services.getIdUser();

    if (this.reporte.zona == "" ||
      this.reporte.fechaProblema == "" ||
      this.reporte.horaProblema == "" ||
      this.reporte.descripcion == "") {
      this.flag_campo = true;
    } else {
      this.flag_campo = false;
      console.log(this.reporte)
      this.services.nuevoReporte(this.reporte).subscribe(
        (res: any) => {
          console.log(res.idReporte);
          for (let i = 0; i < this.images.length; i++) {
            const element = this.images[i];
            const filetoup = element.file;
            const filepathstorage = `img/reporte${res.idReporte}/${element.filename}`;
            const ref = this.storage.ref(filepathstorage)
            const task = ref.put(filetoup);
            task.snapshotChanges().pipe(
              finalize(() => {
                let url = ref.getDownloadURL().subscribe(
                  async (resr) => {
                    this.urlImages.push(resr);
                    const obj = { url: resr, idReporte: res.idReporte };
                    await this.services.postImagenes(obj).then(
                      res => {
                        console.log("hecho");
                      }
                    );
                  }
                );
              })
            ).subscribe()
            //const obj={url:,idReporte:1}
            //this.services.postImagenes()
          }
          this.flag_campo_2 = true
          //listo para guardar imagenes
          //window.location.replace('/reportes')
        }
      );
    }


  }


  private time() {
    let chartTime: any = new Date();
    chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes());
    let horaActual = chartTime;
    this.reporte.horaReporte = horaActual;

    let dateTime: any = new Date();
    dateTime = dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getDate();
    let fechaActual = dateTime;
    this.reporte.fechaReporte = fechaActual;
  }

  public ObtenerImagenes(e){
    /**var option:ImagePickerOptions={
      maximumImagesCount:15
    }
    this.imagePicker.getPictures(option).then(
      (result)=>{
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          let filname = element.substring(element.lastIndexOf('/')+1);
          //let path = element.substring(0, element.lastIndexOf('/')+1);
          this.images.push({file:element,filename:filname})
        }
      }
    )  */
    const Files:File[] = e.target.files;
    this.images = []
    for (const iterator of Files) {
      this.images.push({file:iterator,filename:iterator.name})
    }
  }

}

