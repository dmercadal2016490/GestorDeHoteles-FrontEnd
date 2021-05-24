import { Injectable } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestHabitacionService } from '../restHabitacion/rest-habitacion.service'
 
@Injectable({
  providedIn: 'root'
})
export class RestServicioService {

  public token;

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

  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI
  }

  saveServicio(idHabitacion, servicio){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    let params= JSON.stringify(servicio);
    return this.http.post(this.uri+'servicios/'+idHabitacion+'/create', params, {headers:headers})
    .pipe(map(this.extractData))
  }
}
