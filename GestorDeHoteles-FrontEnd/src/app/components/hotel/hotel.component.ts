import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { Router } from '@angular/router';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelSelected: Hotel;
  hotel;

  constructor(private restHotels:RestHotelService) {
    this.hotelSelected = new Hotel('','','',null,null,null,null,null,null);
  }

  ngOnInit(): void {
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'));
  }

  onSubmit(){}
}
