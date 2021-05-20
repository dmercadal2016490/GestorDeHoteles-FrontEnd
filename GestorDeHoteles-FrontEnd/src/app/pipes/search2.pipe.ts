import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search2'
})
export class Search2Pipe implements PipeTransform {

  transform(users: any, search2: any): any {
    if(search2 == undefined){
      return users;
    }else{
      return users.filter( user=>{
        return user.username.toLowerCase().includes(search2.toLowerCase()) ||
        user.name.toLowerCase().includes(search2.toLowerCase()) ||
        user.lastname.toLowerCase().includes(search2.toLowerCase()) ||
        user.email.toLowerCase().includes(search2.toLowerCase())  ||
        user.rol.toLowerCase().includes(search2.toLowerCase());
      })
    }
  }

}
