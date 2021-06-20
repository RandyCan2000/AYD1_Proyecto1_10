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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ReportesComponent,
    DetailNotificationComponent,
    PerfilComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
