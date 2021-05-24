import { Component, OnInit } from '@angular/core';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { FacturaService } from 'src/app/services/restFactura/factura.service'
import { Facturas } from '../../models/facturas';
import { Router } from '@angular/router';
import { RestHabitacionService } from 'src/app/services/restHabitacion/rest-habitacion.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  hotels;
  hotel;
  habitacion;
  reservation;
  public user;
  public token;
  public bill:[];
  idUser;
  userId;
  public facturas:Facturas;

  constructor(private restUser:RestUserService,
     private restFactura:FacturaService,
     private restHotel:RestHotelService,
      private restReservacion:RestReservacionService,
      private restHabitacion:RestHabitacionService,
      private route: Router
      ){

   }

  ngOnInit(): void {
    this.facturas = new Facturas(null, []);
    this.token = this.restFactura.getToken();
    /*this.user = this.restUser.getUser();*/
    this.habitacion = this.restHabitacion.getHabitacion();
    this.user = JSON.parse(localStorage.getItem('user'))
    this.hotels = this.restHotel.getHotels();
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'))
    this.reservation = this.restReservacion.getReservacion();
    this.habitacion = JSON.parse(localStorage.getItem('roomSelected'));
  }

  onSubmit(form){
    this.restFactura.saveFactura(this.hotel._id, this.facturas).subscribe((res:any)=>{
      if(res){
        alert('Factura creada')
        form.reset();
        this.facturas = res;
        localStorage.setItem('bill', JSON.stringify(this.bill))
        this.route.navigateByUrl('home')
      }else{
        alert('No se creo la factura')
      }
    }, error => console.log(<any>error))
  }
}