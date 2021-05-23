import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { RestHabitacionService } from 'src/app/services/restHabitacion/rest-habitacion.service';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { Reservacion } from '../../models/reservacion';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  reservacion: Reservacion;
  public token;
  public reservation:[];
  public room;
  public hotel;
  hotelSelected: Hotel;
  hotelId;
  idHotel;
  roomId;
  idRoom;

  constructor(private restReservacion: RestReservacionService,
              private restHabitacion: RestHabitacionService,
              private restHotel: RestHotelService,
              private route: Router) { 

              }

  ngOnInit(): void {
    this.reservacion = new Reservacion (null, null, null, null, [])
    this.token = this.restReservacion.getToken();
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'));
    this.room = JSON.parse(localStorage.getItem('roomSelected'))
  }

  onSubmit(form){
    this.restReservacion.saveReservacion(this.room._id , this.hotel._id , this.reservacion).subscribe((res: any)=>{
      if(res){
        alert('Reservacion creada')
        form.reset();
        this.reservation = res;
        localStorage.setItem('reservation', JSON.stringify(this.reservation))
        this.route.navigateByUrl('home')
      }else{
        alert('No se creo la reservacion')
      }
    }, error => console.log(<any>error))
  }
}