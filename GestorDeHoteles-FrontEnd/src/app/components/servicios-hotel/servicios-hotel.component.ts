import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { RestServicioService } from '../../services/restServicio/rest-servicio.service';
import { RestHabitacionService } from '../../services/restHabitacion/rest-habitacion.service';
import { Router } from '@angular/router';
import { Habitacion } from '../../models/habitacion';

@Component({
  selector: 'app-servicios-hotel',
  templateUrl: './servicios-hotel.component.html',
  styleUrls: ['./servicios-hotel.component.css']
})
export class ServiciosHotelComponent implements OnInit {

  public opcionesServicio = ['VIP', 'Normal', 'Suite'];
  servicio: Servicio;
  public token;
  public service: [];
  room;

  constructor(private restServicio: RestServicioService, private restHabitacion: RestHabitacionService, private route: Router) { 
    this.servicio = new Servicio ('','','');
  }

  ngOnInit(): void {
    this.token = this.restServicio.getToken();
    this.room = JSON.parse(localStorage.getItem('habitacion'))
  }

  onSubmit(hotelSaved){
    this.restServicio.saveServicio(this.room._id, this.servicio).subscribe((res:any)=>{
      if(res){
        alert('Servicio creado');
        hotelSaved.reset();
        this.service = res;
        localStorage.setItem('servicio', JSON.stringify(this.service))
      }else{
        alert('No se creó el evento')
      }
    })
  }
}
