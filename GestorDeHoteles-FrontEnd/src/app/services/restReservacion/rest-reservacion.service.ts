import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { CONNECTION } from '../global';

@Injectable({
  providedIn: 'root'
})
export class RestReservacionService {

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
      'Authorization': 'Bearer '+this.getToken()
    })
  }

getToken(){
  let token = localStorage.getItem('token');
  if(token != undefined || token!=null){
    this.token = token;
  }else{
    this.token = null;
  }
  return this.token;
}

private extractData(res: Response){
  let body = res;
  return body || [] || {};
}

constructor(private http: HttpClient){
  this.uri = CONNECTION.URI
}

saveReservacion(idHotel, idRoom, reservacion){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.getToken()
  });
  let params = JSON.stringify(reservacion);
  return this.http.post(this.uri+'reservaciones/'+idHotel+'/'+idRoom+'/set', params, {headers:headers})
  .pipe(map(this.extractData))
}
}