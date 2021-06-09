import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  exports: [HeaderMenuComponent, HeaderBackComponent],
  declarations: [HeaderMenuComponent, HeaderBackComponent],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentsModule { }
