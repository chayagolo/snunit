import { Component, OnInit, Input} from '@angular/core';
import {UtilsService} from '../utils.service'
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-countries',
  template: '<div>{{letter}}</div>',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  id : number = 0
  letter : string  = ''
  
  allData : any[] = []
  filtered : any[] = []
  currentLetter : string = ''

  @Input() set passedLetter(v: any) {
    this.currentLetter = v    
  }

  constructor(private srv : UtilsService, private router : Router, private route: ActivatedRoute) { 
    let resp = this.srv.getData("https://travelbriefing.org/countries.json")
      .subscribe(data => {
        Array(data).forEach(element => {
          this.allData.push(element)
        });
      }) 
      
    route.params.subscribe(
     (params: { [x: string]: any; }) => {
       this.id = params['id'];
       this.letter = String.fromCharCode(this.id);
       setTimeout(() => {
        this.filtered = this.allData[0].filter((country: { name: string; }) => country.name.charAt(0) == this.letter)
      }, 300);
     });
     console.log(this.currentLetter)
  }

  setDetails(name : string, url : string){
    this.router.navigate(['/country', name])
  }

  // @Input() char : string | undefined; 

  ngOnInit(): void {

  }

}
