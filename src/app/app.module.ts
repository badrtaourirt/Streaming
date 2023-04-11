import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



import { MediaComponent } from './component/media/media.component';

import { ProductsComponent } from './component/products/products.component';
import { SettingsComponent } from './component/settings/settings.component';


import { ProductsLevelThreeOneComponent } from './component/products/products-level-three-one/products-level-three-one.component';
import { ProductsLevelThreeTwoComponent } from './component/products/products-level-three-two/products-level-three-two.component';


@NgModule({
  declarations: [
    AppComponent,
   
    UserDashboardComponent,
    AdminDashboardComponent,
    LoginComponent,
    SignupComponent,

  
 
  
    MediaComponent,
 
    ProductsComponent,
    SettingsComponent,
 

    ProductsLevelThreeOneComponent,
    ProductsLevelThreeTwoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
