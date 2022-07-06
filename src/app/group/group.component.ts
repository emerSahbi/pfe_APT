import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private route: Router,private json:ReadJsonService) { }

  data:any;

  ngOnInit(): void {

    console.log(this.json.getGroup())
    this.data=this.json.getGroup()
  }


}
