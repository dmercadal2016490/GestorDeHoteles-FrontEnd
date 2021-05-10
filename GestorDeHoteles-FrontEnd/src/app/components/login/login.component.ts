import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  token:string;
  usserLogged;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = new User('','','','','','','',[],[]);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.login(this.user).subscribe((res:any)=>{
      if(!res.token){
        alert('No hay token')
      }else{
        this.usserLogged = res.user;
        this.token = res.token;
        delete this.usserLogged.password;
        if(this.token.length <= 0){
          alert('El token no se logro generae')
        }else{
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(this.usserLogged));
          alert('Usuario logeado de forma correcta');
          this.router.navigateByUrl('home');
        }
      }
    },
    (error:any) => alert('No se pudo logear')
    )
  }

}
