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

  public hotel;
  hotelUpdate;

  constructor(private restHotels:RestHotelService, private router: Router) {
    this.hotel = new Hotel('','','',null,null,null,null,null,null);

  }

  ngOnInit(): void {
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'));
  }

  onSubmit(){
    this.restHotels.updateHotel(this.hotelUpdate).subscribe((res: any)=>{
      if(res){
        localStorage.setItem('hotelSelected', JSON.stringify(res))
        alert('Hotel actualizado')
      }else{
        alert('Usuario actualizado en base de datos');
      }
    },error => alert('Hotel no actualizado ' + error.error))
  }

  deleteHotel(){
    this.restHotels.deleteHotel(this.hotel._id).subscribe((res:any)=>{
      if(res.hotelBorrado){
        alert('Hotel eliminado');
        this.router.navigateByUrl('home');
        localStorage.removeItem('hotelSelected');
      }else{
        alert('Hotel eliminado');
        this.router.navigateByUrl('home');
        localStorage.removeItem('hotelSelected');
      }
    },error => alert('Hotel no eliminado ' + error.error))
  }
}
