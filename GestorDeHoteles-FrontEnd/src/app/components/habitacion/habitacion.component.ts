import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion'
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {

  constructor(private restUser: RestUserService) { }

  ngOnInit(): void {
  }

}
