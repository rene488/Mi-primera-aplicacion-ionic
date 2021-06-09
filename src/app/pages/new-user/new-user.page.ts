import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  users: any[] = JSON.parse(localStorage.getItem('users'));
  user = {id: Date.now(), email: '', password: '', username: ''};

  constructor(private toastCtrl: ToastController, private router: Router ) { }

  ngOnInit() {

    if(!this.users){

    this.users = [];
    }

  }

   guardarDatos(){
     if (this.validations()) {
       
       this.users.push(this.user);
      localStorage.setItem('users',JSON.stringify(this.users));
      localStorage.setItem('inSession' ,JSON.stringify(this.user));
      

      setTimeout(() => {
      this.user.email = '';
      this.user.password = '';
      this.user.username = '';
    }, 2000);

    this.router.navigate(['home']);
     
     }
    
  }

  validations(){

    for(let u of this.users){
      if(u.email ==this.user.email){
        this.toast('El email ya tiene un usuario asignado');
        return false;
      }

      if(u.username ==this.user.username){
        this.toast('El nombre de usuario ya esta en uso');
        return false;
      }
    }

    if (!this.user.email){
      this.toast('El email no puede estar vacio');
    return false;
    }

    if (!this.user.password){
      this.toast('La contraseña no puede estar vacia');
    return false;
    }

    if (!this.user.username){
      this.toast('El nombre de usuario no puede estar vacio');
    return false;
    }

    return true;

  }

 async toast(message){
   const toast = await this.toastCtrl.create({
     message: message,
     duration: 1000,
     color: 'primary'
   });

   toast.present();
 }


}
