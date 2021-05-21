import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.css']
})
export class ListEventosComponent implements OnInit {
  hotel;
  events:[];

  constructor(private restHotel:RestHotelService) { }

  ngOnInit(): void {
    this.hotel = this.restHotel.getHotelSelected();
    this.events = this.hotel.event;
    console.log(this.events);
  }

}
