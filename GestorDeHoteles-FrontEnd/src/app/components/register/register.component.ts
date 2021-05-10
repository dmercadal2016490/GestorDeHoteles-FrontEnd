import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;
  public username:string;

  constructor(private restUser:RestUserService) {
      this.user = new User('','','','','','','ROL_CLIENT',[],[]);
   }

   
  ngOnInit(): void {
  }

  onSubmit(register){
    this.restUser.createUser(this.user).subscribe((res:any)=>{
      if(res.nuevoUsuarioCreado){
        alert(res.message);
        register.reset();
      }else{
        alert(res.message);
      }
      error => console.log(<any>error);
    })
  }

}
