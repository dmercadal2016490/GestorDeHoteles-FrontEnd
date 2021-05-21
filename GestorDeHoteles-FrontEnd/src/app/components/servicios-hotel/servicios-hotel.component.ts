import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { RestServicioService } from '../../services/restServicio/rest-servicio.service';
import { RestHabitacionService } from '../../services/restHabitacion/rest-habitacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios-hotel',
  templateUrl: './servicios-hotel.component.html',
  styleUrls: ['./servicios-hotel.component.css']
})
export class ServiciosHotelComponent implements OnInit {

  public opcionesServicio = ['VIP', 'Normal', 'Suite'];
  servicio: Servicio;
  public token;
  public service:[];
  public room;
  roomId;
  idRoom;

  constructor(private restServicio: RestServicioService, 
              private restHabitacion: RestHabitacionService, 
              private route: Router) { 

              }

  ngOnInit(): void {
    this.servicio = new Servicio ('','','')
    this.token = this.restServicio.getToken();
    this.room = JSON.parse(localStorage.getItem('habitacion'))
  }

  onSubmit(form){
    this.restServicio.saveServicio(this.room._id, this.servicio).subscribe((res: any)=>{
      if(res){
        alert('Servicio creado')
        form.reset();
        this.service = res;
        localStorage.setItem('servicio', JSON.stringify(this.service))
        this.route.navigateByUrl('home')
      }else{
        alert('No se creó la habitación')
      }
    }, error => console.log(<any>error))
  }
}
