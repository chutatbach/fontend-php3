import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './pages-error/error404/error404.component';
import { PagesErrorComponent } from './pages-error/pages-error.component';
import { CartComponent } from './pages/cart/cart.component';
import { CateComponent } from './pages/cate/cate.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'category',
        component: CateComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  },
  {
    path:'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'error',
    component: PagesErrorComponent,
    children: [
      {
        path: '',
        component: Error404Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
