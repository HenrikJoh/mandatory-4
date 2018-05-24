import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userCredentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  login() {
    // login user using authService.
    this.authService.login(this.userCredentials).subscribe(() => {
      console.log('loggedin');
    });
  }

  logout() {
    // logout user using authService.
  }

  testApi() {
    // test API access by invoking getResource on authService.
  }
}
