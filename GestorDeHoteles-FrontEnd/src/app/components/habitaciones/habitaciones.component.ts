import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/models/habitacion';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
})
export class HabitacionesComponent implements OnInit {
  user;
  hotel;
  rooms:[];
  roomSelected: Habitacion;

  constructor(private restHotel:RestHotelService, private restUser:RestUserService) { }

  ngOnInit(): void {
    this.hotel = this.restHotel.getHotelSelected();
    this.rooms = this.hotel.room;
    this.user = this.restUser.getUser();
  }

  obtenerData(room){
    localStorage.setItem('roomSelected', JSON.stringify(room))
    this.roomSelected = room;
  }
}