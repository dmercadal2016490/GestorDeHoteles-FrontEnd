import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion';
import { RestHabitacionService } from '../../services/restHabitacion/rest-habitacion.service';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { Router } from '@angular/router'
import { Hotel } from '../../models/hotel'

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {
  habitacion:Habitacion;
  hotelSelected: Hotel;
  hotel;
  public token;
  public room = [];

  constructor(private restHotel: RestHotelService, private restHabitacion: RestHabitacionService, private route: Router) {
    this.habitacion = new Habitacion('disponible','',[]);
    this.hotelSelected = new Hotel('','','',null,null,null,null,null,null);
  }

  ngOnInit(): void {
    this.token = this.restHotel.getToken();
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'));
  }

  onSubmit(form){
    this.restHabitacion.saveHabitacion(this.hotel._id, this.habitacion).subscribe((res: any)=>{
      if(res){
        alert('Habitación creada')
        form.reset()
        this.room = res;
        localStorage.setItem('habitacion', JSON.stringify(this.room))
        this.route.navigateByUrl('servicios')
      }else{
        alert('La habitación no se creó')
      }
    },error => console.log(<any>error))
  }
}
