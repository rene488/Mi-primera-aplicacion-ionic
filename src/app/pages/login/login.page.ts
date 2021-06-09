import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = { img: '', username: '', email: '', password: '' };
  users: any[];
  check = {} as any;
  constructor(private toastCtrl: ToastController,
    private router: Router) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.users = JSON.parse(localStorage.getItem('users'))
  }
  login() {
    if (this.validations()) {
      this.router.navigate(['/app/home']);
      for (let u of this.users) {
        if (u.email == this.user.email) {
          this.user.username = u.username;
          this.user.img = u.img;
          setTimeout(() => {
            this.user.email = '';
            this.user.password = '';        
          }, 2000);
          localStorage.setItem('inSession', JSON.stringify(this.user));
        }
      }
    }
  }
  checking() {
    this.check = this.users.filter(res => res.email == this.user.email);
    return this.check[0];
  }
  validations() {
    if (this.checking() === undefined) {
      this.toast('El usuario no existe');
      return false;
    }
    if(this.checking().password !== this.user.password){
      this.toast('La contraseña es incorrecta');
      console.log(this.checking().password, this.user.password);
      return false;
    }
    if (!this.user.email) {
      this.toast('El email no puede estar vacío');
      return false;
    }
    if (!this.user.password) {
      this.toast('La contraseña no puede estar vacía');
      return false;
    }
    return true;
  }
  async toast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      color: 'primary'
    });
    toast.present();
  }
}