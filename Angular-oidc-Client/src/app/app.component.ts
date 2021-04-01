import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-oidc-Client';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authService.checkAuth().subscribe((isAuthenticated) =>
    //   console.log("app authenticated", isAuthenticated)
    // )
    // if (location.protocol === 'http:') {
    //   window.location.href = location.href.replace('http', 'https');
    // }
    console.log("is logged in ", this.authService.isLoggedIn)

    this.authService.checkAuth().subscribe(
      (isAuthenticated) => {
        console.log('app authenticated', isAuthenticated)
        // if (!isAuthenticated) {
        //   alert('x')
        //   this.authService.doLogin();
        // }

      }
    )

  }
}
