import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  userData$: Observable<any>;
  secretData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.userData$ = this.authService.userData;
    this.isAuthenticated$ = this.authService.isLoggedIn;

    // this.secretData$ = this.httpClient
    //   .get('https://localhost:6001/identity')
    //   .pipe(catchError(
    //     (err) => of(err)
    //   ))
    this.httpClient.post('https://localhost:6001/Identity/CallApi', {}, httpOptions).subscribe(
      res => {
        console.log("returned from api")
      }
    )

  }

  login() {
    this.authService.doLogin();
  }
  logout() {
    this.authService.signout();
  }
}
