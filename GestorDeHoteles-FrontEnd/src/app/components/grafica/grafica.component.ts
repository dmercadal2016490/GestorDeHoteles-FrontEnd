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
  hotels:[];
  
  public doughnutChartLabels: Label[] = ['pepino', 'aguacate','pizza'];
  public doughnutChartData: MultiDataSet = [[350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private restHotels:RestHotelService) {
  }

  ngOnInit(): void {
    this.listHotels();
  }

  listHotels(){
    this.restHotels.getHotel().subscribe((res:any)=>{
      if(res){
        this.hotels = res;
        //alert('Hoteles encontrados');
      }else{
        alert('No hoteles');
      }
    },
    error => alert(error.error))
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
