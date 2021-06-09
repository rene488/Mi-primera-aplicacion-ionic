  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage,
    children: [ 

      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../pages/admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../../pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: 'product-add',
        loadChildren: () => import('../../pages/product-add/product-add.module').then( m => m.ProductAddPageModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('../../pages/product-list/product-list.module').then( m => m.ProductListPageModule)
      },
      {
        path: 'user-list',
        loadChildren: () => import('../../pages/user-list/user-list.module').then( m => m.UserListPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}