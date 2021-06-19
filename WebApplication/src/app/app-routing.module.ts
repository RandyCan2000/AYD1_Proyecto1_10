import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  redirectTo:'login'},
  { path:'login', component: LoginComponent},
  { path:'home', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
