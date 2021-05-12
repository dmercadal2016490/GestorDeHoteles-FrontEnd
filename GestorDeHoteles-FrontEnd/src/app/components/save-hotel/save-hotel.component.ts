import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { User } from '../../models/user';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-save-hotel',
  templateUrl: './save-hotel.component.html',
  styleUrls: ['./save-hotel.component.css']
})
export class SaveHotelComponent implements OnInit {
public user;
public token;
public hotel: Hotel;
adminsNombres = [];
admins = []
adminEncontrado = [];


  constructor(private restUser: RestUserService) { 

    this.user = new User('','','','','','','ROL_CLIENT',[],[]);
    this.hotel = new Hotel('','','','',[],[],[],[],[]);
  }

  ngOnInit(): void {
    this.restUser.getUserAdminHotel().subscribe((res:any) => {
      if(res){
        res.forEach(element => {
          element.forEach(elementoAdmin => {
            this.admins.push(elementoAdmin)
            localStorage.setItem('adminHotels', JSON.stringify(this.admins))
            this.adminsNombres.push(elementoAdmin.name + " " + elementoAdmin.lastname)
          })
        });
      }else{
        alert('No existen Usuarios')
      }
    })
  }

  onSubmit(){

  }

}
