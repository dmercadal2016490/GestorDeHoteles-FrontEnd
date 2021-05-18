import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Hotel } from '../../models/hotel';
import { Router } from '@angular/router';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

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
hotelCreado;
  message: any;


  constructor(private restHotel: RestHotelService, private restUser: RestUserService, private route: Router) { 

    this.user = new User('','','','','','ROL_CLIENT',[],[]);
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
    this.restHotel.saveHotel(this.hotel, this.adminHotel).subscribe((res:any)=>{
      this.hotelCreado = res;
      if(res.hotel){
        console.log(saveHotel)
        alert('Hotel creado exitosamente');
        saveHotel.reset();
        localStorage.setItem('hotel', JSON.stringify(this.hotelCreado))
        saveHotel.reset();
        this.route.navigateByUrl('habitacion')
      }else{
        alert('Hotel creado exitosamente');
        localStorage.setItem('hotel', JSON.stringify(this.hotelCreado))
        console.log(saveHotel)
        saveHotel.reset();
        this.route.navigateByUrl('habitacion')
      }
      error => alert(error.error);
    })
  }

}
