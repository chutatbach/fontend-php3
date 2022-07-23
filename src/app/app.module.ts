import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CateComponent } from './pages/cate/cate.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountComponent } from './account/account.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { PagesErrorComponent } from './pages-error/pages-error.component';
import { Error404Component } from './pages-error/error404/error404.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoaderComponent } from './layout/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CateComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    DetailComponent,
    CartComponent,
    PagesErrorComponent,
    Error404Component,
    CheckoutComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
