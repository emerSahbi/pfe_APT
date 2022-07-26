import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grps-infos',
  templateUrl: './grps-infos.component.html',
  styleUrls: ['./grps-infos.component.css'],
})
export class GrpsInfosComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('sss', this.router.getCurrentNavigation()?.extras.state);
    this.data = this.router.getCurrentNavigation()?.extras.state?.['id'];
  }
  sub: any;
  ngOnInit(): void {
    this.sub = this.route.data.subscribe((v) => console.log(v));
  }
}
