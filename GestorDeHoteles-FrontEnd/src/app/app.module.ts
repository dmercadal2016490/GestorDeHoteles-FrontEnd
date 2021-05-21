//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { UserComponent } from './components/user/user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RestUserService } from './services/restUser/rest-user.service';
import { SearchPipe } from './pipes/search.pipe';
import { ServiciosHotelComponent } from './components/servicios-hotel/servicios-hotel.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { Search2Pipe } from './pipes/search2.pipe';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ListEventosComponent } from './components/list-eventos/list-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SaveUserComponent,
    SaveHotelComponent,
    UserComponent,
    UpdateUserComponent,
    NavbarComponent,
    HabitacionComponent,
    NotFoundComponent,
    SearchPipe,
    ServiciosHotelComponent,
    EventosComponent,
    HotelComponent,
    ListUserComponent,
    Search2Pipe,
    FacturasComponent,
    ReservacionComponent,
    UpdateHotelComponent,
    HabitacionesComponent,
    ListEventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
