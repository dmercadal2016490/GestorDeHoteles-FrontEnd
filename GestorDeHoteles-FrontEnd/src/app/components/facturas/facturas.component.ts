import { Component, OnInit } from '@angular/core';
import { Facturas } from '../../models/facturas';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  public facturas:Facturas;
  constructor() { }

  ngOnInit(): void {
  }

}
