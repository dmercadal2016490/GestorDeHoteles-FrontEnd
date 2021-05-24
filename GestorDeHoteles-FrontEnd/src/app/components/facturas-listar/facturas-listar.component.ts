import { Component, OnInit } from '@angular/core';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { FacturaService } from 'src/app/services/restFactura/factura.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas-listar',
  templateUrl: './facturas-listar.component.html',
  styleUrls: ['./facturas-listar.component.css']
})
export class FacturasListarComponent implements OnInit {
  reservacion;
  user;

  constructor(private restReservacion:RestReservacionService,
    private restFactura:FacturaService,
    private route: Router,
    private restUser:RestUserService) { }

  ngOnInit(): void {
    this.reservacion = this.restReservacion.getReserva();
    this.user = this.restUser.getUser();
  }

}
