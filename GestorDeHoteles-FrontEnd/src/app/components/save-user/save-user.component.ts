import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  public user:User;
  public optionsRol = ['ROL_ADMINAPP', 'ROL_CLIENT', 'ROL_ADMINHOTEL'];
  public token;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = new User('','','','','','','',[],[]);
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
        this.router.navigateByUrl('login');
      }
      error => console.log(<any>error);
    })
  }

}
