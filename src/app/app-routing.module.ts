import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { performanceTimestampProvider } from 'rxjs/internal/scheduler/performanceTimestampProvider';

const routes: Routes = [
   {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
   },
   {
    path:'login',
    loadChildren:()=> import("../app/compo/login/login.module").then(m =>m.LoginModule)
   },
   {
       path:'products',
       loadChildren:() => import("../app/compo/product/product.module").then(m=>m.ProductModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
