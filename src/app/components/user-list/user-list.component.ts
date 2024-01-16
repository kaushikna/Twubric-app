import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  sortedUsers: any[] = [];
  dateRange: any = {};

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.twitterService.getUsers().subscribe(
      (data: any) => {
   
        
        this.users = data;
        this.sortedUsers = [...this.users];
        console.log("this.usersss",this.sortedUsers);
      },
      error => {
        console.error('Error loading users:', error);
      }
    );
  }

  sortUsers(criteria: string) {
    this.sortedUsers = this.twitterService.sortUsers(this.sortedUsers, criteria);
  }

  filterUsersByDate(dateRange: any) {
    console.log('Received date range:', dateRange);
    this.dateRange = dateRange;
    this.sortedUsers = this.twitterService.filterUsersByDate(this.users, this.dateRange);
    console.log('Filtered users:', this.sortedUsers);
  }

  removeUser(userId: string) {
    this.sortedUsers = this.twitterService.removeUser(this.sortedUsers, userId);
  }
 


}
