import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;
  public username:string;

  constructor(private restUser:RestUserService, private route:Router) {
      this.user = new User('','','','','','ROL_CLIENT',[],[]);
   }

   
  ngOnInit(): void {
  }

  onSubmit(register){
    this.restUser.createUser(this.user).subscribe((res:any)=>{
      if(res.nuevoUsuarioCreado){
        alert('Usuario creado exitosamente');
        register.reset();
      }else{
        alert('Usuario creado exitosamente');
        this.route.navigateByUrl('login');
      }
      error => console.log(<any>error);
    })
  }

}
