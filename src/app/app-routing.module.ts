import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DevComponent } from './dev/dev.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    component: DevComponent,
    path: 'dev'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
