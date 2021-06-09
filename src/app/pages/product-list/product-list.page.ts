import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productos = [];

  constructor(private actionSheetController: ActionSheetController, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.productos = JSON.parse(localStorage.getItem('productos'));
  }

  deleteProduct(product){
    this.productos = this.productos.filter(res => {return res.id !== product.id});
    setTimeout(() => {
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }, 1000);
  }

  async confirm(product) {
    const alert = await this.alertController.create({
      header: '¿Deseas eliminar este producto?',
      message: 'Despues de borrarlo no lo podras recuperar.',
      buttons: [
      {
        text: 'cancelar',
        role: 'cancel'
      },
      {
        text: 'Aceptar',
        handler: () => {

          this.deleteProduct(product);
        }
      },
    ]
    });
  
    await alert.present();
  }


  async Options(product) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Ver Producto',
        icon: 'eye-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar Producto',
        icon: 'create-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Eliminar Producto',
        icon: 'trash-outline',
        handler: () => {
          this.confirm(product);
        }
      }]
    });
  
    await actionSheet.present();
  }


}
