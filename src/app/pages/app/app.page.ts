import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {


 pages = [
    { title: 'Inicio', url: '/app/home', icon: 'home-outline' },
    { title: 'Perfil', url: '/app/user-profile', icon: 'person-outline' },  
    { title: 'Admin', url: '/app/admin', icon: 'lock-closed-outline' },  
    { title: 'Cerrar Sesión', url: 'logout', icon: 'exit-outline' },  
  ]

  selectedPath = '';

  constructor(private router: Router) {

     this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

  logout(url){
    if(url == 'logout'){
 this.router.navigate(['login']);
    }
   
  }
}