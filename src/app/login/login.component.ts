import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInput = {
    username: '',
    password: ''
  };

  triedToLogin = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  login() {
    this.triedToLogin = true;
    this.authService.login(this.userInput)
      .subscribe(() => { });
  }

  isValidForm() {
    const userInput = this.userInput;
    return userInput.username.length > 0 && userInput.password.length > 0;
  }
}
