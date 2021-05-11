import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
=======
import { SaveUserComponent } from './components/save-user/save-user.component';
import { AdminGuard } from './guards/admin.guard';
>>>>>>> master

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'home', component:HomeComponent},
<<<<<<< HEAD
  {path: 'saveHotel', component: SaveHotelComponent}
=======
  {path:'saveUser', canActivate:[AdminGuard], component:SaveUserComponent}
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
