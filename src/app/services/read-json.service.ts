import { Injectable } from '@angular/core';
import * as APT28 from '../../data/APT28.json';
import * as APT1 from '../../data/APT1.json';
import * as APT12 from '../../data/APT12.json';
import * as axiom from '../../data/axiom.json';
import * as Carbanak from '../../data/Carbanak.json';
import * as Cleaver from '../../data/Cleaver.json';
import * as Deep_panda from '../../data/Deep Panda.json';
import * as ke3chang from '../../data/ke3chang.json';
import * as Maofee from '../../data/Maofee.json';
import * as Turla from '../../data/Turla.json';


@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  APT28: any = (APT28 as any).default;
  APT1: any = (APT1 as any).default;
  APT12: any = (APT12 as any).default;
  axiom: any = (axiom as any).default;
  Carbanak: any = (Carbanak as any).default;
  Cleaver: any = (Cleaver as any).default;
  Deep_panda: any = (Deep_panda as any).default;
  ke3chang: any = (ke3chang as any).default;
  Maofee: any = (Maofee as any).default;
  Turla: any = (Turla as any).default;


  constructor() { }
  getGroup() {
    const names: any = []

    this.APT28.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT1.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT12.objects.forEach((element: any) => {
      names.push(element)
    });
    this.axiom.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Carbanak.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Cleaver.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Deep_panda.objects.forEach((element: any) => {
      names.push(element)
    });
    this.ke3chang.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Maofee.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Turla.objects.forEach((element: any) => {
      names.push(element)
    });


    return names;
  }
}
