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

  friends = [];
  constructor(private authService: AuthService) { }

  login() {

    const succcess = (response) => {
      console.log('success');
    };

    const error = (response) => {
      console.log('error');
    };
    // login user using authService.
    this.authService.login(this.userCredentials).subscribe(succcess, error);
  }

  logout() {
    // logout user using authService.
    this.authService.logout();
  }

  testApi() {
    // test API access by invoking getResource on authService.
    this.authService.getResource('/friends').subscribe((resp) => {
      this.friends = resp.friends;
      console.log(this.friends, 'friends');
    }, (err) => {

      console.error(err, 'got error');
    });
  }
}
