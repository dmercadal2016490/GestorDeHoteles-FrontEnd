import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Reservacion } from '../../models/reservacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestHotelService } from '../restHotel/rest-hotel.service';
import { RestHabitacionService } from '../restHabitacion/rest-habitacion.service';

@Injectable({
  providedIn: 'root'
})
export class RestReservacionService {
  public uri:string;
  public httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  public httpOptionsAuth ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.getToken()
    })
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != undefined || token != null){
      this.token = token;
    }else{
      this.token = null
    }
    return this.token;
  }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  public token;
  public hotel;
  public room;
  public user;

  constructor(private http : HttpClient, private restHotel: RestHotelService, private restRoom: RestHabitacionService) { 
    this.uri = CONNECTION.URI
  }

  saveReservacion(idHotel, idRoom, reservacion){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    let params = JSON.stringify(reservacion);
    return this.http.post(this.uri+'reservaciones/'+idHotel+'/'+idRoom+'/set', params, {headers:headers})
    .pipe(map(this.extractData))
  }
}
