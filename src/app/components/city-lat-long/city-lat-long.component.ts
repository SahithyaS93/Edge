import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpserviceService } from '../../services/http-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-lat-long',
  templateUrl: './city-lat-long.component.html',
  styleUrls: ['./city-lat-long.component.css']
})
export class CityLatLongComponent implements OnInit, OnDestroy {
  myCityForm: FormGroup;
  constructor(private HttpserviceService: HttpserviceService, private toastr: ToastrService, private ngxService: NgxUiLoaderService) { }
  coordinates: any = { lat: "", long: "" };
  private subscription_var: Subscription;
  ngOnInit() {
    this.myCityForm = new FormGroup({
      'city': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
    this.onChanges();
  }
  onChanges(): void {
    this.myCityForm.valueChanges.subscribe(val => {
      this.coordinates = { lat: "", long: "" };
    });
  }
  get controls() { return this.myCityForm.controls; }
  get_coordinates() {
    this.ngxService.start();
    this.subscription_var = this.HttpserviceService.serviceget(this.myCityForm.value['city']).subscribe(
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
        this.toastr.error(err['statusText']);
        this.ngxService.stop();
      }
    );
  }
  ngOnDestroy() {
    this.HttpserviceService.clearCache();
    this.subscription_var.unsubscribe();
  }
  handleInput(e) {
    if (e.which === 32 && !this.myCityForm.value['city'].length)
      e.preventDefault();
  }
}
