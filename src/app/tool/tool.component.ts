import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private json: ReadJsonService) { }


  data: any;
  filtredData: any = [];

  ngOnInit(): void {
    this.data = this.json.getGroup();
    console.log('qssssssssssssssssd',this.data);
  
    let tool = this.route.snapshot.params['tool_name'];
    let Category = this.route.snapshot.params['Category'];
    console.log('émr', tool);
    const tool_name = this.data.filter(d => d.name === (tool ? tool : d.name) && d.type === Category).map(d => d.name)
    this.filtredData = lodash.intersection(this.data.filter(d => d.name === (tool ? tool : d.name) && d.type === Category).map(d => d.name),this.data.filter(d => d.name === (tool ? tool : d.name) && d.type === Category).map(d => d.name)) 
    console.log(this.filtredData);

    

    
  
  }
}