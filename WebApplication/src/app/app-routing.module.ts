import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { ReporteEmpresaComponent } from './components/reporte-empresa/reporte-empresa.component';
const routes: Routes = [
  { path:'', pathMatch:'full',  redirectTo:'login'},
  { path:'login', component: LoginComponent},
  { path:'notification', component: ReportesComponent},
  { path:'perfil', component: PerfilComponent},
  { path:'registrar', component: RegistrarEmpleadoComponent},
  { path:'reporteEmpresa', component: ReporteEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
