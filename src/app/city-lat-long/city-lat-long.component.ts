import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../http-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-lat-long',
  templateUrl: './city-lat-long.component.html',
  styleUrls: ['./city-lat-long.component.css']
})
export class CityLatLongComponent implements OnInit {

  constructor(private HttpserviceService: HttpserviceService,private toastr: ToastrService) { }
  city:any="";
  coordinates:any={lat:"",long:""};
  
  ngOnInit() {
  }
  get_coordinates()
  {
    this.HttpserviceService.serviceget(this.city)
    .subscribe(
      (datas) => {
        datas=JSON.parse(datas);
        if (datas['status'] == "OK") {
          
       this.coordinates=datas['results'][0].geometry.location;
       console.log(this.coordinates);
        } else {
          this.toastr.error('Invalid City Input!!!');
        }
      },
      (err) => {
          this.toastr.error(err._body);
      }
    );
  }
  remove_coordinates()
  {
    this.coordinates={lat:"",long:""};
   
  }
}
