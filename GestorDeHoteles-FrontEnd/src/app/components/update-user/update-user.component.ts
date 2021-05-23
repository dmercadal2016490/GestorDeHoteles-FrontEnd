import { Component,DoCheck, OnInit} from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from'@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user:User;
  public title:string;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = this.restUser.getUser();
    this.title = 'Actualizar perfil'
   }
  ngOnInit(): void {
  }


  onSubmit(){
    delete this.user.password;
    this.restUser.updateUser(this.user).subscribe((res:any)=>{
      if(res){
        delete res.password;
        localStorage.setItem('user', JSON.stringify(res));
        alert('Usuario actualizado');
        this.router.navigateByUrl('user');
      }else{
        alert('Usuario actualizado en base de datos');
        this.restUser.getUser();
        this.router.navigateByUrl('user');
      }
    },
    error=> console.log(error.error))
  }

}
