import { Component, OnInit } from '@angular/core';
import { HealthSystemService } from './health-system.service';
import { LoginComponent } from './features/login/login.component';
import { Character, User } from './character.model';
import { Router } from '@angular/router';

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


   

  constructor(private healthSystemService: HealthSystemService, private characterService: HealthSystemService,private router: Router ) { }


   logout() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.healthSystemService.getPosts().subscribe((posts: any[]) => {
      console.log(posts);

      this.posts = posts;
    });

    this.characterService.getGamingCharacter().subscribe(res => {
      console.log(res);

      this.characters = res.items;
    });


    
  }



}
