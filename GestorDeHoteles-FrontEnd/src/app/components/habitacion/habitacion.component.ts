import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion';
import { RestHabitacionService } from '../../services/restHabitacion/rest-habitacion.service';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { Router } from '@angular/router'

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

  constructor(private restHotel: RestHotelService, private restHabitacion: RestHabitacionService, private route: Router) {
    this.habitacion = new Habitacion('disponible','',[]);
  }

  ngOnInit(): void {
    this.token = this.restHotel.getToken();
    this.hotel = JSON.parse(localStorage.getItem('hotel'))
    console.log(this.hotel._id)
  }

  onSubmit(form){
    this.restHabitacion.saveHabitacion(this.hotel._id, this.habitacion).subscribe((res: any)=>{
      if(res){
        alert('Habitación creada')
        form.reset()
        this.room = res;
        localStorage.setItem('habitacion', JSON.stringify(this.room))
        this.route.navigateByUrl('servicio')
      }else{
        alert('La habitación no se creó')
      }
    })
  }
}
