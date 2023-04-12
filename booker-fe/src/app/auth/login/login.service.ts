import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserInput, User } from 'src/132';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly httpClient: HttpClient) { }
  login(loginRequest: CreateUserInput) {
    return this.httpClient.post<User>('api/auth/login', loginRequest);
  }
  
}
