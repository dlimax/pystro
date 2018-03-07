import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './services/user.service'
import { RestaurantService } from './services/restaurant.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },  
  { path: 'register', component: RegisterComponent }    
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResetpasswordComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
