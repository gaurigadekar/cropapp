import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'product-list'/*:GrandTotal*/, loadChildren: './product-list/product-list.module#ProductListPageModule' },
  { path: 'product-list/:distname', loadChildren: './product-list/product-list.module#ProductListPageModule' },
  { path: 'distributor', loadChildren: './distributor/distributor.module#DistributorPageModule' },
  { path: 'productin-kg', loadChildren: './productin-kg/productin-kg.module#ProductinKgPageModule' },
  { path: 'productin-kg/:cropName', loadChildren: './productin-kg/productin-kg.module#ProductinKgPageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' }
//  { path: 'productin-kg/:distname', loadChildren: './productin-kg/productin-kg.module#ProductinKgPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
