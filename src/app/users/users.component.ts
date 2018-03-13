import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Create users based on data from GET request
   */
  getUsers() {
    this.userDataService.getUsers().subscribe((data: any) => {
      data.forEach(userInfo => {
        const user: User = {
          id: userInfo.id,
          username: userInfo.username,
          address: {
            street: userInfo.address.street,
            suite: userInfo.address.suite,
            city: userInfo.address.city,
            zipcode: userInfo.address.zipcode
          }
        };
        this.users.push(user);
      });
    });
  }

  /**
   * Set the current user being viewed
   * @param clickedUser - the user
   */
  onViewPostsClick(clickedUser) {
    this.userDataService.setCurrentUser(clickedUser);
  }

}
