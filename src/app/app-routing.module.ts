import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { SignupComponentComponent } from './auth/signup-component/signup-component.component';

const routes: Routes = [
  { path: 'login',
    component: LoginComponentComponent,
  },
  { path: 'signup' ,
    component: SignupComponentComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
