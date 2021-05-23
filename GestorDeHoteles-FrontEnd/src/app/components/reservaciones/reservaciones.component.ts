import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  user;
  reservaciones:[];
  reservationSelected: Reservacion;

  constructor(private restUser:RestUserService) { }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.reservaciones = this.user.bills;
  }

  obtenerData(bills){
    localStorage.setItem('reservation',JSON.stringify(bills))
    this.reservationSelected = bills;
  }
}
