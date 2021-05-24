import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  name;
  hotels;
  solicitud;
  
  
  public doughnutChartLabels: Label[] = ['Reservaciones'];
  public doughnutChartData: MultiDataSet = [[this.hotelSoliciud()],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private restHotels:RestHotelService) {
    this.hotels = this.restHotels.getHotelSelected()
    if(this.hotelSoliciud()==0){
      alert('No hay reservaciones')
    }
  }

  ngOnInit(): void {
    this.hotels = this.restHotels.getHotelSelected()
  }

  hotelNombre(){
    return this.hotels = this.restHotels.getHotelSelected().name
  }

  hotelSoliciud(){
    return this.solicitud = this.restHotels.getHotelSelected().solicitud
  }

  

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}