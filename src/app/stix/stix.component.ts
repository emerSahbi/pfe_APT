import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';


@Component({
  selector: 'app-stix',
  templateUrl: './stix.component.html',
  styleUrls: ['./stix.component.css']
})
export class STIXComponent implements OnInit {
  public url;

  constructor(private route: ActivatedRoute, private json: ReadJsonService, private sanitizer : DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://stix2/');
  

  }

  ngOnInit(): void {
  }

}
