import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:[];
  search2;

  constructor(private restUser:RestUserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.restUser.getUsers().subscribe((res:any)=>{
      if(res){
        this.users= res;
      }else{
        alert('No usuarios');
      }
    },
    error => alert(error.error))
  }
}


