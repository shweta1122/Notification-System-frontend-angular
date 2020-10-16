import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AdminviewComponent } from './component/adminview/adminview.component';

const routes: Routes = [

  {path: '',component: LoginComponent},
  { path: 'adminview', component: AdminviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
