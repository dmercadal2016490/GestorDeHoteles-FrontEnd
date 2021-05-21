import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
})
export class HabitacionesComponent implements OnInit {
  hotel;
  rooms:[];

  constructor(private restHotel:RestHotelService) { }

  ngOnInit(): void {
    this.hotel = this.restHotel.getHotelSelected();
    this.rooms = this.hotel.room;
    console.log(this.rooms);
  }

}
