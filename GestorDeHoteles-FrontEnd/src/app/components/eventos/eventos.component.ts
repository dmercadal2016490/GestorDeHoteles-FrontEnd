import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { Router } from '@angular/router'
import { RestEventoService } from 'src/app/services/restEvento/rest-evento.service';
import { DatePipe } from '@angular/common';
import { Hotel } from '../../models/hotel'

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  evento: Evento;
  public event: [];
  public token;
  hotelSelected: Hotel;
  hotel;

  constructor(private restHotel: RestHotelService, private restEvento: RestEventoService, private route: Router){
    this.evento = new Evento('',null,'','');
    this.hotelSelected = new Hotel('','','',null,null,null,null,null,null);
  }

  ngOnInit(): void {
    this.token = this.restHotel.getToken();
    this.token = this.restHotel.getToken();
    this.hotel = JSON.parse(localStorage.getItem('hotelSelected'))
  }
    
  onSubmit(form){
    this.restEvento.saveEvento(this.hotel._id, this.evento).subscribe((res: any)=>{
      if(res){
        alert('Evento creado')
        form.reset();
        this.event = res;
        localStorage.setItem('evento', JSON.stringify(this.event))
      }else{
        alert('No se creó el evento')
      }
    })
  }
}
