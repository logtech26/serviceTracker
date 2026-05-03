import { Component, OnInit } from '@angular/core';
import { HealthSystemService } from './health-system.service';
import { LoginComponent } from './features/login/login.component';
import { Character, User } from './character.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-dash-app';

  posts: any[] = [];
  characters: any[] = [];
  users: User[] = [];
  currentPage = 1;
  totalPages = 0;
  loading = false;
  isAuthPage = false;

  constructor(
    private healthSystemService: HealthSystemService,
    private characterService: HealthSystemService,
    private router: Router,
  ) {

    // logic to determine if the current route is login or signup
    // hide link to dashboard if on login or signup page
    this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;

      this.isAuthPage = url.includes('/login') || url.includes('/signup');
    });
  }

  ngOnInit() {
    this.healthSystemService.getPosts().subscribe((posts: any[]) => {
      console.log(posts);

      this.posts = posts;
    });

    this.characterService.getGamingCharacter().subscribe((res) => {
      console.log(res);

      this.characters = res.items;
    });
  }

  logout() {
    this.router.navigate(['/']);
  }

  // Method to navigate to the settings page
  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  // Method to navigate to the profile page
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  // Method to navigate to the ng-element page
  navigateToNgElement() {
    this.router.navigate(['/ngelement']);
  }
}
