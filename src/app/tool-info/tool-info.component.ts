
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';


@Component({
  selector: 'app-tool-info',
  templateUrl: './tool-info.component.html',
  styleUrls: ['./tool-info.component.css']
})
export class ToolInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private json: ReadableStream) { }
 
  ngOnInit(): void {
  }

}
