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
adminHotel;
idAdmin;
  message: any;


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
            this.adminsNombres.push(elementoAdmin.name)
          })
        });
      }else{
        alert('No existen Usuarios')
      }
    })
  }

  onSubmit(saveHotel){
    let adminId = JSON.parse(localStorage.getItem('adminHotels'))
    adminId.forEach(elemento => {
      if(elemento.name.includes(this.idAdmin)){
        this.adminHotel = elemento._id
      }
    });
    console.log(this.adminHotel);
    this.restUser.saveHotel(this.hotel, this.adminHotel).subscribe((res:any)=>{
      if(res.hotel){
        console.log(saveHotel)
        //alert('Hotel creado exitosamente');
        //saveHotel.reset();
      }else{
        //alert('Hotel creado exitosamente');
        console.log(saveHotel)
      }
      error => console.log(<any>error);
    })
  }

}
