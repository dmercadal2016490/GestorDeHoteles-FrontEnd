import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestUserService {
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

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined || user != null){
      this.user = user
    }else{
      this.user = null;
    }
    return this.user;
  }

  testService(){
    return 'Servicio funcionando'
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

  createUser(user){
    let params = JSON.stringify(user);
    return this.http.post(this.uri + 'usuarios/create', params, this.httpOptions)
      .pipe(map(this.extractData))
  }

  login(user){
    let params = JSON.stringify(user);
    return this.http.post(this.uri + 'usuarios/login', params, this.httpOptions)
      .pipe(map(this.extractData))
  }

  getUserAdminHotel(){
    return this.http.get(this.uri + 'usuarios/adminHotel', this.httpOptionsAuth)
      .pipe(map(this.extractData));
  }

  updateUser(usurioActualizar){
    let params = JSON.stringify(usurioActualizar);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.put(this.uri + 'usuarios/' + usurioActualizar._id, params, {headers:headers})
      .pipe(map(this.extractData))
  }

  deleteUser(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.delete(this.uri + 'usuarios/' + idUser, {headers:headers})
      .pipe(map(this.extractData))
  }
  getUsers(){
    return this.http.get(this.uri + 'usuarios/')
      .pipe(map(this.extractData))
  }
}
