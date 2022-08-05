import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  constructor(private route: ActivatedRoute, private json: ReadJsonService) { }

  data: any;
  filtredData: any = [];
  ngOnInit(): void {
    console.log(this.json.getGroup());
    this.data = this.json.getGroup();
    console.log('émr', this.route.snapshot.params['country']);
    let country_source = this.route.snapshot.params['country_source'];
    let country_victim = this.route.snapshot.params['country_victim'];
    let sector = this.route.snapshot.params['sector'];
    let name = this.route.snapshot.params['name'];
    console.log('country_source', country_source)
    console.log('country_victim', country_victim)
    console.log('sector target', sector)

    const idsSector = this.data.filter(d => d.name === (sector ? sector : d.name)).map(d => d.id)

    const sctr = this.data.filter(d => idsSector.indexOf(d.target_ref) > -1).map(d => d.source_ref);
    console.log('sdf', sctr);
    const idsCountrySource = this.data.filter(d => d.name === (country_source ? country_source : d.name)).map(d => d.id)
    const idsCountryTarget = this.data.filter(d => d.name === (country_victim ? country_victim : d.name)).map(d => d.id)
    const group_name = this.data.filter(d => d.name === (name ? name : d.name)).map(d => d.name)
      console.log('Group Name',group_name);
      
    const src = this.data.filter(d => idsCountrySource.indexOf(d.target_ref) > -1 && d.relationship_type === "originates-from").map(d => d.source_ref);
    const trgt = this.data.filter(d => idsCountryTarget.indexOf(d.target_ref) > -1 && d.relationship_type === "targets").map(d => d.source_ref);
    const grp_name = lodash.intersection(this.data.filter(d => src.indexOf(d.id) > -1).map(d => d.name), this.data.filter(d => trgt.indexOf(d.id) > -1).map(d => d.name), this.data.filter(d => sctr.indexOf(d.id) > -1).map(d => d.name),group_name)
    console.log('Name', grp_name);
    this.filtredData = this.data.filter(d => grp_name.indexOf(d.name) > -1)



    // if (country_source) {
    //   let id: any = [];
    //   console.log(this.data);
    //   this.data.map((r: any) => {
    //     r.name === country_source ? id.push(r.id) : 0;
    //   });
    //   console.log('country id', id);



    //   let source_ref: any = [];
    //   this.data.map((r: any) => {
    //     id.some((e: any) => e == r.target_ref && r.relationship_type==="originates-from")
    //       ? source_ref.push(r.source_ref)
    //       : 0;
    //   });
    //   console.log('source ref', source_ref);
    // // ['1', '2', '11', '22', '12', '3', '3'].filter(s => s === '3')  // ==> ['3' , '3']
    // //   ['1', '2', '11', '22', '12', '3', '3', 4].filter(s => type of s === 'string')  // ==> ['1','2','11','22','12','3', '3' ]
    // //   ['1', '2', '11', '22', '12', '3', '3', 4].filter(s => type of s === 'number' || s.indexof('1') > -1)  // ==> ['1','11','12' , 4]







    //   this.data.map((r: any) => {
    //     if (source_ref.some((e: any) => e == r.id))
    //       this.filtredData.push(r.name);
    //   });
    //   console.log('source country', this.filtredData);




    //   }

    // if (country_victim) {
    //   let id: any = [];
    //   console.log(this.data);
    //   this.data.map((r: any) => {
    //     r.name === country_victim ? id.push(r.id) : 0;
    //   });
    //   console.log('country id', id);



    //   let source_ref: any = [];
    //   this.data.map((r: any) => {
    //     id.some((e: any) => e == r.target_ref)
    //       ? source_ref.push(r.source_ref)
    //       : 0;
    //   });
    //   console.log('source ref', source_ref);







    //   this.data.map((r: any) => {
    //     if (source_ref.some((e: any) => e == r.id))
    //       this.filtredData.push(r.name);
    //   });
    //   console.log('filtred Data', this.filtredData);




    //   }
    //   if (sector) {
    //     let id: any = [];
    //     console.log(this.data);
    //     this.data.map((r: any) => {
    //       r.name === sector ? id.push(r.id) : 0;
    //     });
    //     console.log('sector id', id);



    //     let source_ref: any = [];
    //     this.data.map((r: any) => {
    //       id.some((e: any) => e == r.target_ref)
    //         ? source_ref.push(r.source_ref)
    //         : 0;
    //     });
    //     console.log('source ref', source_ref);







    //     this.data.map((r: any) => {
    //       if (source_ref.some((e: any) => e == r.id))
    //         this.filtredData.push(r.name);
    //     });
    //     console.log('filtred Data sector', this.filtredData);




    //     }

    //     if (name) {
    //       let id: any = [];
    //       console.log(this.data);
    //       this.data.map((r: any) => {
    //         r.name === name ? id.push(r.name) : 0;
    //       });
    //       console.log('name', id);

    //       }
  }
}