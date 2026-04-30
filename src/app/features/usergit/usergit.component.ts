import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/character.model';
import { BrowserModule } from "@angular/platform-browser";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usergit',
  templateUrl: './usergit.component.html',
  styleUrls: ['./usergit.component.scss'],


})
export class UsergitComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((usr: User[]) => {
      console.log("from user=>>>>>", usr);
      
      this.users = usr;
    })
    
  }

}