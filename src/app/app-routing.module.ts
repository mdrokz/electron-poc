import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DevComponent } from './dev/dev.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PopupComponent } from './popup/popup.component';


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
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: PopupComponent,
    path: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
