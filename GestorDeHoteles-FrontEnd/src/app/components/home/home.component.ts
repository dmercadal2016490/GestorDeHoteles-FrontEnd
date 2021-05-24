import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels:[];
  hotelSelected:Hotel;
  user;
  search;
  public hotel;
  hotelAdmin;

  constructor(private restHotels:RestHotelService, private restUser:RestUserService) { }

  ngOnInit(): void {
    this.listHotels();
    this.hotelSelected = new Hotel('','','',null,null,null,null,null,null);
    this.user = this.restUser.getUser();
  }

  listHotels(){
    this.restHotels.getHotel().subscribe((res:any)=>{
      if(res){
        this.hotels = res;
      }else{
        alert('No hoteles');
      }
    },
    error => alert(error.error))
  }

  obtenerData(hotel){
    localStorage.setItem('hotelSelected', JSON.stringify(hotel))
    this.hotelSelected = hotel
  }

  eliminarData(){
    localStorage.removeItem('hotelSelected')
  }
}