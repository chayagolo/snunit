import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesByLettretComponent } from './cities-by-lettret/cities-by-lettret.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes : Routes = [{path: "countries/:id" , component: CountriesComponent},
                            {path: "country/:name" , component: CountryComponent}]

@NgModule({
  declarations: [
    AppComponent,
    CitiesByLettretComponent,
    CountriesComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
