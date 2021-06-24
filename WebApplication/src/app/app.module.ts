import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/MaterialModule';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormsModule } from '@angular/forms';
import { DetailNotificationComponent } from './components/detail-notification/detail-notification.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ServicesService } from './services/services.service';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { ReporteEmpresaComponent } from './components/reporte-empresa/reporte-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ReportesComponent,
    DetailNotificationComponent,
    PerfilComponent,
    RegistrarEmpleadoComponent,
    ReporteEmpresaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents:[
    DetailNotificationComponent
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
