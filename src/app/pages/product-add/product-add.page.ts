import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  productos: any[];
  producto = {id: Date.now(), nombre: '',img: '', precio: ''}
  

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {

    
  }

  ionViewWillEnter(){
this.producto;
this.productos = JSON.parse(localStorage.getItem('productos'));  
if (!this.productos){
  this.productos = [];
}
  }

  agregarProducto(){
if(this.validations()){

     this.productos.push(this.producto);
     localStorage.setItem('productos',JSON.stringify (this.productos));
     this.router.navigate(['/app/product-list']);


     setTimeout(() => {
       this.producto.nombre = '';
      this.producto.img = '';
      this.producto.precio = '';
     }, 2000);
     
    }
    
  
  }

  validations(){

    if(!this.producto.nombre){
      this.toast('El nombre no puede estar vacio');
      return false;
    }

    if(!this.producto.img){
      this.toast('La imagen no puede estar vacia');
      return false;
    }

    if (!this.producto.precio){
      this.toast('El precio no puede estar vacio');
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

 



