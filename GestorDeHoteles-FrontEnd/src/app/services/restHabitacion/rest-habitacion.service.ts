import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from '../../models/habitacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestHotelService } from '../restHotel/rest-hotel.service';

@Injectable({
  providedIn: 'root'
})
export class RestHabitacionService {

  public uri:string;
  public httpOptions ={
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

  public token;
  public hotel;
  public habitacion;

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

  constructor(private http : HttpClient, private restHotel: RestHotelService) {
    this.uri = CONNECTION.URI
  }
  
  saveHabitacion(idHotel, habitacion){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    let params = JSON.stringify(habitacion);
    return this.http.post(this.uri+'habitaciones/'+idHotel+'/create', params, {headers:headers})
    .pipe(map(this.extractData))
  }
}
