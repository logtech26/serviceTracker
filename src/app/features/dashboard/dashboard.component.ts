import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  email: string = '';
  password: string = '';
  index = 0;

  displayedColumns: string[] = ['id', 'email', 'password', 'delete'];
  dataSource = new MatTableDataSource<any>();
  registeredUsers: any[] = [];

  constructor(private router: Router) {
    this.registeredUsers = JSON.parse(localStorage.getItem('users') || '[]');
  }

   
  // add pagnation and sorting functionality
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('sort') sort: any;

  //add ngOnInit lifecycle hook to load data when the component initializes
  ngOnInit() {
    this.refreshData();

    // filtered users
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const email = (data.email || '').toLowerCase();
      return email.substring(0, 2) === filter;
    };

    console.log(this.paginator);
    console.log(this.dataSource.paginator);
  }

  applyFilter(event: Event) {
    // filter the 2 first letters of the email column and ignore case sensitivity
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase()
      .substring(0, 2);
    this.dataSource.filter = filterValue;
  }

  // Method to refresh the dashboard data
  refreshData() {
    const registerUserTbl = JSON.parse(localStorage.getItem('users') || '[]');
    this.dataSource.data = registerUserTbl;
  }

  addUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // prevent blank input
    if (!this.email || !this.password) {
      alert('Email and password are required!');
      return;
    }

    // optional: trim whitespace
    const email = this.email.trim();
    const password = this.password.trim();

    if (!email || !password) {
      alert('Fields cannot be empty!');
      return;
    }

    // validate password strength (at least 6 characters, including letters and numbers)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        'Password must be at least 6 characters long and contain both letters and numbers!',
      );
      return;
    }

    // validate email format using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // prevent duplicate entries
    const existingUser = users.find((user: any) => user.email === this.email);

    if (existingUser) {
      alert('User already exists!');
      return;
    }

    // generrate next ID
    const nextId =
      users.length > 0
        ? Math.max(...users.map((user: any) => Number(user.id) || 0)) + 1
        : 1;

    users.push({ id: nextId, email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));

    // update the table data source with the new user
    // this.dataSource.data = [...this.dataSource.data, { id: nextId, email: this.email, password: this.password }];
    this.dataSource = new MatTableDataSource([
      ...this.dataSource.data,
      {
        id: nextId,
        email: this.email,
        password: this.password,
      },
    ]);

    // resetting everything back to empty field.
    this.email = '';
    this.password = '';
  }

  deleteUser(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.id !== user.id);
    this.dataSource.data = this.dataSource.data.filter((u) => u.id !== user.id);

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    this.refreshData();
  }

  // Method to navigate to the settings page
  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  // Method to navigate to the profile page
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  // Method to handle logout
  logout() {
    this.router.navigate(['/']);
  }

  // add ngAfterViewInit lifecycle hook to set the paginator after the view initializes
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
