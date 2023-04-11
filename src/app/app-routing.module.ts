import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';



import { MediaComponent } from './component/media/media.component';
import { SettingsComponent } from './component/settings/settings.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path:'login', component: LoginComponent},

 
  
  
   
 
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



