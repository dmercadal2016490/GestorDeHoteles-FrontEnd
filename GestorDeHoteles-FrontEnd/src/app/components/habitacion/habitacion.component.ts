import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion';
import { RestHabitacionService } from '../../services/restHabitacion/rest-habitacion.service';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {
  habitacion:Habitacion;
  public token;
  public room = [];
  public hotel;
  hotelId;
  idHotel;

  constructor(private restHotel: RestHotelService, private restHabitacion: RestHabitacionService) {
    this.habitacion = new Habitacion('','','',[]);
  }

  ngOnInit(): void {
    this.hotel = this.restHotel.getHotel();
    this.token = this.restHotel.getToken();
  }

  onSubmit(form){
    let hotel = JSON.parse(localStorage.getItem('hotel'))
    
    hotel.forEach(elemento => {
      if(elemento._id.includes(this.hotelId)){
        this.idHotel = elemento._id;
      }
    });
    console.log(this.idHotel);
    /*this.restHabitacion.saveHabitacion(this.idHotel, this.habitacion).subscribe((res: any)=>{
      if(res.roomCreated){
        alert('Habitación creada')
        form.reset()
        this.room = res.roomCreated;
        localStorage.setItem('habitacion', JSON.stringify(this.room))
      }else{
        alert('La habitación no se creó')
      }
    })*/
  }

}
