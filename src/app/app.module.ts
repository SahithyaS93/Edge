import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { routes } from './app.routing.module';
import { AppComponent } from './app.component';
import { CityLatLongComponent } from './components/city-lat-long/city-lat-long.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
@NgModule({
  declarations: [
    AppComponent,
    CityLatLongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({ showForeground: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
