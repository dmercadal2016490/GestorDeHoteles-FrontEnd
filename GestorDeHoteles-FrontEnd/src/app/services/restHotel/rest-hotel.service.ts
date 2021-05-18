import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestHotelService {
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

  public user;
  public token;
  public hotel;
  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }
  constructor(private http : HttpClient) {
    this.uri = CONNECTION.URI
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

  getHotel(){
    return this.http.get(this.uri + 'hoteles/')
      .pipe(map(this.extractData))
  }

  saveHotel(hotel, idAdmin){
    console.log(hotel)
    let params = JSON.stringify(hotel)
    return this.http.post(this.uri+'hoteles/create/'+idAdmin,params, this.httpOptionsAuth)
      .pipe(map(this.extractData))
  }
}
