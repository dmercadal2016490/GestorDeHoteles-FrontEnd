import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion';
import { Router } from '@angular/router';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  user;
  reservacion;
  reservaciones:[];
  reservationSelected: Reservacion;

  constructor(private restUser:RestUserService, private restReservacion:RestReservacionService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.reservaciones = this.user.history;
    this.reservacion = this.restReservacion.getReserva();
  }

  obtenerData(history){
    localStorage.setItem('reservacionSelected',JSON.stringify(history))
    this.reservationSelected = history;
  }

  prueba(){
    console.log(this.reservacion.room);
  }


  deleteReservacion(){
    this.restReservacion.deleteReservacion(this.reservacion._id,  this.reservacion.room).subscribe((res:any)=>{
      if(res){
        alert('reservacion cancelada');
        this.router.navigateByUrl('reservaciones');
        localStorage.removeItem('reservacionSelected');
      }else{
        alert('Reservacion cancelada');
        this.router.navigateByUrl('reservaciones');
        localStorage.removeItem('reservacionSelected');
      }
    },error => alert('Reservacion no encontrada ' + error.error))
  }
}
