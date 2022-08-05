import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:Router) { }
  country_source:any="";
  country_victim:any="";
  sector:any="";
  motivation:any="";
  name:any="";
  tool:any="";
  Category:any="";
  tool_name:any="";

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
      country_source:this.country_source,
      country_victim:this.country_victim,
      sector:this.sector,
      name:this.name,
     
     
    }
    console.log(filter)
    this.route.navigate(["/group/",filter])
  }
  onsearchTool(){

    let filters={

      tool:this.tool,
      Category:this.Category,
      tool_name:this.tool_name,
      
    }
    console.log(filters)
    this.route.navigate(["/tool/",filters])
  }
}
