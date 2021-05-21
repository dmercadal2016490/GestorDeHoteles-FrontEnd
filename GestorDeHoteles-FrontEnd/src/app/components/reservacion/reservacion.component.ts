import { Component, OnInit } from '@angular/core';
import { Reservacion } from '../../models/reservacion';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  public reservacion:Reservacion;
  constructor() { }

  ngOnInit(): void {
  }

}
