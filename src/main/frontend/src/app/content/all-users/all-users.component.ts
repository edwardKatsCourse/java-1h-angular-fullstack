import { Component, OnInit } from '@angular/core';
import User from "../../model/User";
import {UserHttpService} from "../../user-http.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  public users: User [] = [];

  constructor(private userHttpService: UserHttpService) {
    // this.httpClient = httpClient;
  }

  //JSON<string> -> JSON<User[]>

  //JSON.stringify()
  //JSON.parse()

  getUsers() {
    return this.userHttpService
      .getUsersObservable()
      .subscribe(data => this.users = data);
  }

  ngOnInit() {
    this.getUsers();
  }
}
