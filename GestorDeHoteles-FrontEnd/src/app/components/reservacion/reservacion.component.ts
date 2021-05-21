import { Component, OnInit } from '@angular/core';
import { Reservacion } from '../../models/reservacion';
import { Hotel } from '../../models/hotel';
import { RestReservacionService } from '../../services/restReservacion/rest-reservacion.service';
import { Router, RouterModule } from '@angular/router';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestHabitacionService } from 'src/app/services/restHabitacion/rest-habitacion.service';
import { Habitacion } from 'src/app/models/habitacion';


@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  reservacion:Reservacion;
  hotelSelected:Hotel;
  habitacionSelected:Habitacion;
  hotel;
  habitacion;
  public token;
  public factura = [];

  constructor(private restHotel: RestHotelService, private restHabitacion: RestHabitacionService, private restReservacion: RestReservacionService, private route: Router) {
    this.reservacion = new Reservacion(null,null,null,null,[]);
    this.habitacionSelected = new Habitacion('disponible','',[]);
    this.hotelSelected = new Hotel('','','',null,null,null,null,null,null);
   }

  ngOnInit(): void {
    this.token = this.restReservacion.getToken();
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'));
    /*this.habitacion = (JSON.parse(localStorage.getItem('hotelSelected')));*/
    this.habitacion = localStorage.getItem(JSON.parse('habitacionselected'))
  }

  onSubmit(form){
    this.restReservacion.saveReservacion(this.hotel._id, this.hotel.room, this.reservacion).subscribe((res:any)=>{
      if(res){
        alert('Reservacion realizada')
        form.reset()
        this.reservacion = res;
        localStorage.setItem('reservacion', JSON.stringify(this.reservacion))
        this.route.navigateByUrl('servicios')
      }else{
        alert('La reservacion no se creo')
      }
    },error => console.log(<any>error))
  }

}
