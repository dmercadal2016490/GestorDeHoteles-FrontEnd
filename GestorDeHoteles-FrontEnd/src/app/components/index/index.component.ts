import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  token;

  constructor(private restUser:RestUserService) { }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
  }

}
