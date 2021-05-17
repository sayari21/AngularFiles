import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployComponent } from './employ/employ.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { EmployReactiveComponent } from './employ-reactive/employ-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
const appRoutes : Routes=[
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children:[
    {path:'login-reactive',component:LoginReactiveComponent,outlet:'data'},
    {path:'employ-reactive',component:EmployReactiveComponent,outlet:'data'},
    {path:'employ',component:EmployComponent,outlet:'data'},
    {path:'customer',component:CustomerComponent,outlet:'data'}

  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployComponent,
    LoginReactiveComponent,
    EmployReactiveComponent,
    MenuComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
