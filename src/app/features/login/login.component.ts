import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  message: string = '';

  showVal: boolean = false;

   clearInputs = () => {
    this.username = '';
    this.password = '';
  }

  onLogin() {
    // Implement your login logic here
    if (this.username === 'admin' && this.password === 'password') {
      this.message = 'Login successful!';
     this.clearInputs();
    } else if(this.message === '' && this.password === '') {
      this.message = ' username & password must be filled.';
      this.clearInputs();
    }else{
      this.message = 'Invalid username or password. Please try again.';
      this.clearInputs();

    }

  }

  dataTest: string = '';

}
