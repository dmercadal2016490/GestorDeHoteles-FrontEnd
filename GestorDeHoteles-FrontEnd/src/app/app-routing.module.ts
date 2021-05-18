import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { AdminGuard } from './guards/admin.guard';
import { LoggedGuard } from './guards/logged.guard'
import { LoggedOutGuard } from './guards/logged-out.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { UserComponent } from './components/user/user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiciosHotelComponent } from './components/servicios-hotel/servicios-hotel.component';



const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path:'login', canActivate:[LoggedOutGuard],component: LoginComponent},
  {path:'register', canActivate:[LoggedOutGuard],component: RegisterComponent},
  {path: 'home', canActivate:[LoggedGuard], component:HomeComponent},
  {path: 'saveHotel', canActivate: [AdminGuard], component: SaveHotelComponent},
  {path: 'saveUser', canActivate: [AdminGuard], component: SaveUserComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'habitacion', component: HabitacionComponent},
  {path: 'user', canActivate:[LoggedGuard],component: UserComponent},
  {path: 'updateUser', canActivate: [LoggedGuard], component: UpdateUserComponent},
  {path: 'updateUser', canActivate: [AdminGuard], component: UpdateUserComponent},
  {path: 'servicios', component: ServiciosHotelComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
