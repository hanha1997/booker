import { CreateUserInput } from '../../../132';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private readonly loginService: LoginService, private readonly router: Router) {}
  ngOnInit(): void {
    
  }
  login(createUserData: CreateUserInput) {
    this.loginService.login(createUserData).subscribe(() => {
        this.router.navigate(['/']);
    }); 
  }
}
