import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels:[];
  hotelSelected:Hotel;

  constructor(private restHotels:RestHotelService) { }

  ngOnInit(): void {
    this.listHotels();
    this.hotelSelected = new Hotel('','','',null,null,null,null,null,null);
  }

  listHotels(){
    this.restHotels.getHotel().subscribe((res:any)=>{
      if(res){
        this.hotels = res;
        //alert('Hoteles encontrados');
      }else{
        alert('No hoteles');
      }
    },
    error => alert(error.error))
  }

  obtenerData(hotel){
    this.hotelSelected = hotel
  }

}
