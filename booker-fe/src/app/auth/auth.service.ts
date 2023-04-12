import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly anthenticated = new Subject<boolean>
  anthenticated$ = this.anthenticated.asObservable();

  constructor(private readonly httpClient:HttpClient, private readonly router: Router) {}  
  isAuthenticated() {
    return this.httpClient
      .get<boolean>('api/auth')
      .pipe( 
        tap(() => {
          this.anthenticated.next(true);
        }),
        catchError(() => of(false))
      );
  }
  logout() {
    return this.httpClient.post('api/auth/logout', {}).subscribe(() => {
      this.anthenticated.next(false);
      this.router.navigate(['/login'])
    })
  } 
}
