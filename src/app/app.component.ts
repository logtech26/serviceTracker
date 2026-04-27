import { Component, OnInit } from '@angular/core';
import { HealthSystemService } from './health-system.service';
import { LoginComponent } from './features/login/login.component';
import { Character, User } from './character.model';

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

  constructor(private healthSystemService: HealthSystemService, private characterService: HealthSystemService) { }

  ngOnInit() {
    this.healthSystemService.getPosts().subscribe((posts: any[]) => {
      console.log(posts);

      this.posts = posts;
    });

    this.characterService.getGamingCharacter(this.currentPage).subscribe(res => {
      console.log(res);

      this.characters = res.items;
    });

    this.healthSystemService.getMockData(this.currentPage).subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });

   this.loadCharacters();
    
  }


// add logic to load more data 
  loadCharacters(): void {
  this.loading = true;

  this.characterService.getGamingCharacter(this.currentPage)
    .subscribe(res => {
      this.characters = [...this.characters, ...res.items]; // append
      this.totalPages = res.meta.totalPages;
      this.loading = false;
    });
}


loadMore(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadCharacters();
  }
}




}
