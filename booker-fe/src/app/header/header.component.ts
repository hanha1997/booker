import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>
  constructor(
    private readonly authService: AuthService,
    private readonly httpClient:HttpClient
  ) {
    this.isLoggedIn$ = this.authService.anthenticated$;
  }
  ngOnInit(): void {
    
  }

  onLogout() {
     this.authService.logout();
  }
}
