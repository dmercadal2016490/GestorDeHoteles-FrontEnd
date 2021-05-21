import { Component, DoCheck,OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { Hotel } from '../../models/hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {
  public hotel: Hotel;

  constructor(private restHotels: RestHotelService, private router: Router) {
    this.hotel = this.restHotels.getHotelData();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restHotels.updateHotel(this.hotel).subscribe((res: any)=>{
      if(res){
        localStorage.setItem('hotelSelected', JSON.stringify(res))
        alert('Hotel actualizado')
      }else{
        this.restHotels.getHotelData();
        alert('Usuario actualizado en base de datos');
        this.router.navigateByUrl('hotel')
      }
    },error => alert('Hotel no actualizado ' + error.error))
  }
}
