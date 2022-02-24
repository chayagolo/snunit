import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UtilsService} from '../utils.service'

@Component({
  selector: 'app-cities-by-lettret',
  template: '<app-countries [letter] = letter></app-countries>',
  templateUrl: './cities-by-lettret.component.html',
  styleUrls: ['./cities-by-lettret.component.css'],
})

export class CitiesByLettretComponent implements OnInit {

  constructor(private srv : UtilsService, private router : Router) { }

  allData : any[] = []
  letter : string = ''

  showCountries(letter : string, id : Number){
    //sessionStorage["letter"] = letter
    this.letter = letter

    this.router.navigate(['/countries', id])
  }

  alphabet : any[] = []
  tempJson : any = { "id": 0, "val": ''} 

  ngOnInit(): void {    
    for(let i=65; i<=90; i++){
      let letter = String.fromCharCode(i);
      this.tempJson = { "id" : i, "val": letter} 
      this.alphabet.push(this.tempJson)
    }
  }

}
