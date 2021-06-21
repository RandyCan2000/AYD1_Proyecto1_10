import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailNotificationComponent } from '../detail-notification/detail-notification.component';
import { ServicesService } from 'src/app/services/services.service';
import { Reporte } from 'src/app/models/Reporte';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;//Crear las paginas
  @ViewChild(MatSort) sort: MatSort;//Para ordenar

  ELEMENT_DATA: Reporte[] = [];

  displayedColumns: string[] = ['idreporte', 'zona', 'fechareporte', 'horareporte', 'estado', 'tipoproblema', 'usuario'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  public SelectOptionRadioButton:string = "";

  private filterpredicate:any = this.dataSource.filterPredicate

  constructor(private dialog: MatDialog,private service:ServicesService) {
    this.service.Verification()
  }

  ngOnInit(){
    setInterval(() => {
      this.ngAfterViewInit(); 
      }, 3000);
  }

  async ngAfterViewInit() {
    await this.service.GetAllReportes().then(
      result=>{
        this.ELEMENT_DATA = result
        
        
      }
    )
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  selectRadioButton(){
    
    switch (this.SelectOptionRadioButton) {
      case '1':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          return data.idreporte == filter;
        };
        break;
      case '2':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          return data.zona.toLowerCase().includes(filter);
        };
        break;
      case '3':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          return data.fechareporte.toLowerCase().includes(filter);
        };
        break;
      case '4':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          return data.horareporte.toLowerCase().includes(filter);
        };
        break;  
      case '5':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          if(filter.trim().toLowerCase().includes('sin revisar')){
            return data.horareporte.toLowerCase().includes('0')
          }
          else if(filter.trim().toLowerCase().includes('revisado')){
            return data.horareporte.toLowerCase().includes('0')
          }
          else if(filter.trim().toLowerCase().includes('notificado')){
            return data.horareporte.toLowerCase().includes('0')
          }
          else if(filter.trim().toLowerCase().includes('solucionado')){
            return data.horareporte.toLowerCase().includes('0')
          }
        };
        break;
      case '6':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          return data.nombre.toLowerCase().includes(filter);
        };
        break;
      case '7':
        this.dataSource.filterPredicate = function(data:any, filter: any): boolean {
          return data.nombreusuario.toLowerCase().includes(filter);
        };
        break;
      case '8':
        this.dataSource.filterPredicate = this.filterpredicate;
        break;
    }
  }

  SelectData(Notificacion:any){
    this.dialog.open(DetailNotificationComponent, {
      data: {
        id: Notificacion.idreporte
      }
    });
  }

}
