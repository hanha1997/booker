import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { Bookmark1Component } from './bookmark/bookmark1/bookmark1.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignUpComponent
  },
  {
    path: 'bookmarks/:id', 
    component: Bookmark1Component,
    canActivate: [AuthGuard]
  },
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
