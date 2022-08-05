import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-grps-infos',
  templateUrl: './grps-infos.component.html',
  styleUrls: ['./grps-infos.component.css'],

})
export class GrpsInfosComponent implements OnInit {
  data: any;
  all_data: any;
  
  CountryTarget: any;
  SourceTarget: any;

  Tools: any;
  Malware: any;
  constructor(private route: ActivatedRoute, private router: Router, private json: ReadJsonService) {
    console.log('test', this.router.getCurrentNavigation()?.extras.state);
    this.all_data = this.json.getGroup()
    this.data = this.router.getCurrentNavigation()?.extras.state?.['id'];
  }
  sub: any;
  ngOnInit(): void {

   
    const group_id = this.data.id;
    this.sub = this.route.data.subscribe((v) => console.log(v));
    console.log("all data", this.all_data);
    console.log("group_id", group_id);

    const target_id = this.all_data.filter(d => d.source_ref === (group_id ? group_id : d.name) && d.relationship_type === "targets" ).map(d => d.target_ref)
    console.log('target_id', target_id );

    const tools_ref = this.all_data.filter(d => this.data.id.indexOf(d.source_ref) > -1 && d.relationship_type === "uses").map(d => d.target_ref);
    console.log('tool_id', tools_ref);

    const tools_name = this.all_data.filter(d => tools_ref.indexOf(d.id) > -1 && d.type ==="tool").map(d =>d.name);
    console.log('Tools name',tools_name);

    
    const malware_name = this.all_data.filter(d => tools_ref.indexOf(d.id) > -1 && d.type ==="malware").map(d =>d.name);
    console.log('Malware name',malware_name);

    this.Tools = lodash.intersection(tools_name,tools_name);
    console.log('tools',this.Tools);

    this.Malware = lodash.intersection(malware_name,malware_name);
    console.log('Malware',this.Malware);
    
    


    


  


    const originate_id = this.all_data.filter(d => d.source_ref  === (group_id ? group_id : d.name) && d.relationship_type === "originates-from" ).map(d => d.target_ref)
    console.log('originate_id', originate_id);

    const target_country_name = this.all_data.filter(d => target_id.indexOf(d.id) > -1 && d.type === "location").map(d => d.name);
  

    const source_country_name = this.all_data.filter(d => originate_id.indexOf(d.id) > -1 && d.type === "location").map(d => d.name)

    this.SourceTarget = lodash.intersection(source_country_name,source_country_name)
    console.log('SourceTarget',this.SourceTarget.name);
    this.CountryTarget = lodash.intersection(target_country_name,target_country_name)
    console.log('country_names',this.CountryTarget);



    
    
 
 



  }
}
