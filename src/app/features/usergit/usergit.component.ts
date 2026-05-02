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

  pageIndex = 0;
  pageSize = 10;

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.loadUsers();
    
  }

  loadUsers(){
     this.userService.getUsers(this.pageIndex + 1, this.pageSize).subscribe((usr: User[]) => {
      console.log("from user=>>>>>", usr);
      console.log("item per page", this.pageSize);
      console.log("item per page", this.pageIndex);
      
      this.users = usr;
    });
  }

  onPageChange(event:any){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

}