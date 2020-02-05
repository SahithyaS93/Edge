import { Component } from '@angular/core';
import { HttpserviceService } from '../../services/http-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-city-lat-long',
  templateUrl: './city-lat-long.component.html',
  styleUrls: ['./city-lat-long.component.css']
})
export class CityLatLongComponent {

  constructor(private HttpserviceService: HttpserviceService, private toastr: ToastrService, private ngxService: NgxUiLoaderService) { }
  city: any = "";
  coordinates: any = { lat: "", long: "" };
  get_coordinates() {
    this.ngxService.start();
    this.HttpserviceService.serviceget(this.city)
      .subscribe(
        (datas) => {
          datas = JSON.parse(datas);
          if (datas['status'] == "OK") {
            this.ngxService.stop();
            this.coordinates = datas['results'][0].geometry.location;
          } else {
            this.toastr.error('Invalid City Input!!!');
            this.ngxService.stop();
          }
        },
        (err) => {
          this.toastr.error(err);
          this.ngxService.stop();
        }
      );
  }
  remove_coordinates() {
    this.coordinates = { lat: "", long: "" };
  }
  handleInput(e) {
    if (e.which === 32 && !this.city.length)
      e.preventDefault();
  }
}
