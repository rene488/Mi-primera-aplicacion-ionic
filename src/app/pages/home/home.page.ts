import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user = {} as any;

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    this.user = JSON.parse(localStorage.getItem('inSession'));
  }

  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('inSession');
  }

}
