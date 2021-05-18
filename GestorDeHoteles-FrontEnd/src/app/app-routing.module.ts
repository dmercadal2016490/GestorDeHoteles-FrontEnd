import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { AdminGuard } from './guards/admin.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { UserComponent } from './components/user/user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'saveHotel', canActivate: [AdminGuard], component: SaveHotelComponent},
  {path: 'saveUser', canActivate: [AdminGuard], component: SaveUserComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'habitacion', component: HabitacionComponent},
  {path: 'user', component: UserComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
