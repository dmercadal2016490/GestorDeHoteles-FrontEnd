import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from'@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user:User;
  public title:string;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = this.restUser.getUser();
    this.title = 'Mi perfil'
   }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear();
    alert('Gracias por visitarnos. Usuario deslogeado');
    this.router.navigateByUrl('index');
  }

  deleteUser(){
    this.restUser.deleteUser(this.restUser.getUser()._id).subscribe((res:any)=>{
      if(!res.userRemoved){
        alert('Usuario eliminado');
        localStorage.clear();
        this.router.navigateByUrl('index');
      }else{
        alert('Usuario no eliminado')
        localStorage.clear();
        this.router.navigateByUrl('index');
      }
    },
    error => alert('Usuario no eliminadon ' + error.error))
  }

}
