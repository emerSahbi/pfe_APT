import { Injectable } from '@angular/core';
import * as APT28 from '../../data/APT28.json';
import * as APT1 from '../../data/APT1.json';


@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  APT28: any = (APT28 as any).default;
  APT1: any = (APT1 as any).default;


  constructor() { }
  getGroup() {
    const names: any = []

    this.APT28.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT1.objects.forEach((element: any) => {
      names.push(element)
    });


    return names;
  }
}
