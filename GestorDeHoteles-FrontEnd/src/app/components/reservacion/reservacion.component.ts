import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { RestHabitacionService } from 'src/app/services/restHabitacion/rest-habitacion.service';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { RestServicioService } from 'src/app/services/restServicio/rest-servicio.service';
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
  //servicio;

  constructor(private restReservacion: RestReservacionService,
              private restHabitacion: RestHabitacionService,
              //private restServicio: RestServicioService,
              private restHotel: RestHotelService,
              private route: Router) { 

              }

  ngOnInit(): void {
    this.reservacion = new Reservacion (null, null, null, null, [])
    this.token = this.restReservacion.getToken();
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'));
    this.room = JSON.parse(localStorage.getItem('roomSelected'));
    //this.servicio = JSON.parse(localStorage.getItem('servicio'));
  }

  /*ngDoCheck(){
    this.servicio = this.restServicio.getServicio();
  }*/

  onSubmit(form){
    this.restReservacion.saveReservacion(this.hotel._id ,this.room._id , this.reservacion).subscribe((res: any)=>{
      if(res){
        alert('Reservacion creada')
        form.reset();
        this.reservation = res;
        localStorage.setItem('reservation', JSON.stringify(this.reservation))
        this.route.navigateByUrl('facturas')
      }else{
        alert('No se creo la reservacion')
      }
    }, error => console.log(<any>error))
  }
}