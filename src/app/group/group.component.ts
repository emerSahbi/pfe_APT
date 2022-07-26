import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private route: ActivatedRoute,private json:ReadJsonService) { }

  data:any;

  ngOnInit(): void {

    console.log("émr",this.route.snapshot.params['country'] )
    let country=this.route.snapshot.params['country'];
    let sector=this.route.snapshot.params['sector'];
    let motivation=this.route.snapshot.params['motivation'];
    

    if(country){
    let id:any =[]

    this.data.map((r:any)=>{
      r.name===country? id.push(r.id):0


    })
      
    let target_id:any =[]
    this.data.map((r:any)=>{
      r.target_ref===id? target_id.push(r.source_id):0
    
    })


  }
    console.log(this.json.getGroup())
    this.data=this.json.getGroup()
  }


}
