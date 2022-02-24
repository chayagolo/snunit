import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../utils.service';
import {} from 'googlemaps';
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  constructor(private srv : UtilsService, private router : Router, private route: ActivatedRoute) { 
    route.params.subscribe(
     (params: { [x: string]: any; }) => {
       this.country = params['name'];
     });
  }

  country : string = ''

  mapProperties : any = {
    center: new google.maps.LatLng(35.2271, -80.8431),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  @ViewChild("myMap") mapElement : any;
  map : any;

  details : any = {}
  show : boolean = false

  month: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  date = new Date();
  name : string = this.month[this.date.getMonth()];
  pathing : any = `this.details.weather.${this.name}.tAvg`

  symbol : any

  setDetails(){
    // let s = `<span>${this.details.currency.symbol}</span>`
    // // this.symbol = $(s); 
    // var htmlObject = document.createElement('span');
    // htmlObject.innerHTML = s;
    // let innerSymbol = document.getElementById("symbol")
    // innerSymbol?.innerHTML = this.details.currency.symbol

    this.pathing = eval(this.pathing)

    this.mapProperties = {
      center: new google.maps.LatLng(this.details.maps.lat, this.details.maps.long),
      zoom: Number(this.details.maps.zoom),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    setTimeout(() => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
    }, 2000);
  }

  getDetails(){
    let resp = this.srv.getData("https://travelbriefing.org/" + this.country + "?format=json")
    .subscribe(data => {
      console.log(data)
      this.details = data
    })
    setTimeout(() => {
      this.setDetails()
    }, 700);
  }
  
  showDetails(){
    this.getDetails()

    this.show = true
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  showNeiDetails(ctry : string){
    this.router.navigate(['/country', ctry])
    this.show = false
  }

  ngOnInit(): void {
    this.getDetails()
  }
}
