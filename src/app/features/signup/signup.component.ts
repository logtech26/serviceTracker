import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email = '';
  password = '';
  messageValidation = '';
  errormsg = false
  msg: string = '';
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  signup() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = users.find((user: any) => user.email === this.email);

    if (userExists) {
      this.messageValidation = 'Email already exists. Please use a different email.';
      return;
    }

    if (!this.email || !this.password) {
      this.errormsg = true;
      //this.messageValidation = 'Please fill in all fields.';
      this.snackBar.open('Please fill in all fields.', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top' });
      return;
    }

    // generate ID for the body
    const nextId = 
    users.length > 0
         ? Math.max(...users.map((user: any) => Number(user.id) || 0 )) + 1
         : 1;

    users.push({ id: nextId, email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));
    //this.message = 'Signup successful. You can now login.';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
