import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users: any[];

  constructor() { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.users = JSON.parse(localStorage.getItem('users'));
  }

}
