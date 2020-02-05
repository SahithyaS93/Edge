import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityLatLongComponent} from './components/city-lat-long/city-lat-long.component'

export const routes: Routes = [
  {
    path: '',
    component: CityLatLongComponent
  },
];
