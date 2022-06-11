import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
 


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    HttpClientModule
    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
