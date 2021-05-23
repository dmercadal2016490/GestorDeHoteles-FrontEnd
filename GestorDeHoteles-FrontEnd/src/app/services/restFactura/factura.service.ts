import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { CONNECTION } from '../global';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

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

  saveFactura(idHotel, factura){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.getToken()
    });
    let params = JSON.stringify(factura)
    return this.http.post(this.uri+'facturas/'+idHotel+'/set', params, {headers:headers})
    .pipe(map(this.extractData))
  }

}
