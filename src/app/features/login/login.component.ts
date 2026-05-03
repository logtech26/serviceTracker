import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar) {}
  email: string = '';
  password: string = '';
  errorMessage: boolean = false;
  adminEmail: string = 'admin@gmail.com';
  admin: boolean = false;
  regularUser: boolean = false;

  ngOnInit() {

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminUser = users.find((user: any) => user.email === this.adminEmail);
    const nextId = 
    users.length > 0
         ? Math.max(...users.map((user: any) => Number(user.id) || 0 )) + 1
         : 1;
    if (!adminUser) {
      users.push({ id: nextId, email: this.adminEmail, password: 'admin123' });
      localStorage.setItem('users', JSON.stringify(users));
    }

    console.log('Users in localStorage:', adminUser);
    
  }

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (user: any) => user.email === this.email && user.password === this.password
    );  

    if (user) {
    //  this.errorMessage = false;
      this.snackBar.open('Login successful!', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: ['success-snackbar'] });
      this.router.navigate(['/dashboard']);
    } else {
      //this.errorMessage = true;
      this.snackBar.open('Invalid email or password.', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: ['error-snackbar'] });
    }
  }
   
}
