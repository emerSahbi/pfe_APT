import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:Router) { }
  country:any="";
  sector:any="";
  motivation:any="";
  name:any="";

  ngOnInit(): void {
  }

  goToGroup() {
    this.route.navigate(["/group"])
  }

  goToTool(){
    this.route.navigate(["/tool"])
  }
  onsearchClick(){

    let filter={
      country:this.country,
      sector:this.sector,
     motivation: this.motivation
    }
    console.log(filter)
    this.route.navigate(["/group/",filter])
  }
}
