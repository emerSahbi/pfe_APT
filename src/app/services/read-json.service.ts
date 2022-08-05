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
import * as admin338 from '../../data/admin@338.json';
import * as ajax from '../../data/Ajax Security Team.json';
import * as andriel from '../../data/Andariel.json';
import * as APTC36 from '../../data/APTC36.json';
import * as APT3 from '../../data/APT3.json';
import * as APT16 from '../../data/APT16.json';
import * as APT17 from '../../data/APT17.json';
import * as APT18 from '../../data/APT18.json';
import * as APT19 from '../../data/APT19.json';
import * as APT29 from '../../data/APT19.json';
import * as APT30 from '../../data/APT30.json';
import * as APT32 from '../../data/APT32.json';
import * as APT33 from '../../data/APT33.json';
import * as APT37 from '../../data/APT37.json';
import * as APT38 from '../../data/APT38.json';
import * as APT39 from '../../data/APT39.json';
import * as APT41 from '../../data/APT41.json';
import * as BlackdoorDiplomacy from '../../data/BackdoorDiplomacy.json';
import * as BlackOasis from '../../data/BlackOasis.json';
import * as BlackTech from '../../data/BlackTech.json';
import * as Blue_Mockingbird from '../../data/Blue Mockingbird.json';
import * as Bouncing_Golf from '../../data/Bouncing Golf.json';
import * as BRONZE_BUTLER from '../../data/BRONZE BUTLER.json';
import * as Chimera from '../../data/Chimera.json';
import * as Cobalt_Group from '../../data/Cobalt Group.json';
import * as CopyKittens from '../../data/CopyKittens.json';
import * as CostaRicto from '../../data/CostaRicto.json';
import * as Dark_Caracal from '../../data/Dark Caracal.json';
import * as Dragonfly from '../../data/Dragonfly.json';
import * as Dragonfly_2 from '../../data/Dragonfly 2.0.json';
import * as Darkhotel from '../../data/Darkhotel.json';
import * as DragonOK from '../../data/DragonOK.json';
import * as Dust_Storm from '../../data/Dust Storm.json';
import * as Elderwood from '../../data/Elderwood.json';
import * as Equation from '../../data/Equation.json';
import * as Evilnum from '../../data/Evilnum.json';
import * as Ferocious_Kitten from '../../data/Ferocious Kitten.json';
import * as FIN4 from '../../data/FIN4.json';
import * as FIN5 from '../../data/FIN5.json';
import * as FIN6 from '../../data/FIN6.json';
import * as FIN7 from '../../data/FIN7.json';
import * as FIN8 from '../../data/FIN8.json';
import * as FIN10 from '../../data/FIN10.json';
import * as Fox_kitten from '../../data/Fox kitten.json';
import * as Frankenstein from '../../data/Frankenstein.json';
import * as GALLIUM from '../../data/GALLIUM.json';
import * as Gamaredon_Group from '../../data/Gamaredon Group.json';
import * as GCMAN from '../../data/GCMAN.json';
import * as GOLD_SOUTHFIELD from '../../data/GOLD SOUTHFIELD.json';
import * as Gorgon_Group from '../../data/Gorgon Group.json';
import * as Group5 from '../../data/Group5.json';
import * as HAFNIUM from '../../data/HAFNIUM.json';
import * as Higaisa from '../../data/Higaisa.json';
import * as Honeybee from '../../data/Honeybee.json';
import * as Inceprtion from '../../data/Inceprtion.json';
import * as IndigoZebra from '../../data/IndigoZebra.json';
import * as Indik_Spider from '../../data/Indrik Spider.json';
import * as Kimsuky from '../../data/Kimsuky.json';
import * as Lazarus_Group from '../../data/Lazarus Group.json';
import * as Leafminer from '../../data/Leafminer.json';
import * as Leviathan from '../../data/Leviathan.json';
import * as Lotus_Blossom from '../../data/Lotus Blossom.json';
import * as Machete from '../../data/Machete.json';
import * as Magic_Hound from '../../data/Magic Hound.json';
import * as menuPass from '../../data/menuPass.json';
import * as Mofang from '../../data/Mofang.json';
import * as Molerats from '../../data/Molerats.json';
import * as MuddyWater from '../../data/MuddyWater.json';
import * as Mustang_Panda from '../../data/Mustang Panda.json';
import * as Naikon from '../../data/Naikon.json';
import * as NEODYMIUM from '../../data/NEODYMIUM.json';
import * as Night_Dragon from '../../data/Night Dragon.json';
import * as Nomadic_Octopus from '../../data/Nomadic Octopus.json';
import * as OilRig from '../../data/OilRig.json';
import * as Operation_Wocao from '../../data/Operation Wocao.json';
import * as Orangeworm from '../../data/Orangeworm.json';
import * as Patchowrk from '../../data/Patchowrk.json';
import * as PittyTiger from '../../data/PittyTiger.json';
import * as PLATINUM from '../../data/PLATINUM.json';
import * as Posedon_Group from '../../data/Posedon Group.json';
import * as PROMETHIUM from '../../data/PROMETHIUM.json';
import * as Putter_Panda from '../../data/Putter Panda.json';
import * as Rancor from '../../data/Rancor.json';
import * as Rocke from '../../data/Rocke.json';
import * as RTM from '../../data/RTM.json';
import * as Sandworm_Team from '../../data/Sandworm Team.json';
import * as Scarlet_Mimic from '../../data/Scarlet Mimic.json';
import * as Sharpshooter from '../../data/Sharpshooter.json';
import * as Sidewinder from '../../data/Sidewinder.json';
import * as Silence from '../../data/Silence.json';
import * as Silent_Librarian from '../../data/Silent Librarian.json';
import * as SilverTerrier from '../../data/SilverTerrier.json';
import * as Sowbug from '../../data/Sowbug.json';
import * as Stealth_Falcon from '../../data/Stealth Falcon.json';
import * as Strider from '../../data/Strider.json';
import * as Suckfly from '../../data/Suckfly.json';
import * as TA459 from '../../data/TA459.json';
import * as TA505 from '../../data/TA505.json';
import * as TA511 from '../../data/TA511.json';
import * as TeamTNT from '../../data/TeamTNT.json';
import * as TEMP_Veles from '../../data/TEMP.Veles.json';
import * as The_White_Company from '../../data/The White Company.json';
import * as Threat_Group_1314 from '../../data/Threat Group-1314.json';
import * as Threat_Group_3390 from '../../data/Threat Group-3390.json';
import * as Thrip from '../../data/Thrip.json';
import * as Tonto_Team from '../../data/Tonto Team.json';
import * as Transparent_Tribe from '../../data/Transparent  Tribe.json';
import * as Tropic_Trooper from '../../data/Tropic Trooper.json';
import * as Volatile_Cedar from '../../data/Volatile Cedar.json';
import * as Whitefly from '../../data/Whitefly.json';
import * as Windigo from '../../data/Windigo.json';
import * as Windshift from '../../data/Windshift.json';
import * as Winnti_Group from '../../data/Winnti Group.json';
import * as WIRTE from '../../data/WIRTE.json';
import * as Wizad_Spider from '../../data/Wizad Spider.json';
import * as ZIRCONIUM from '../../data/ZIRCONIUM.json';







@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {
  APTC36: any = (APTC36 as any).default;
  APT3: any = (APT3 as any).default;
  APT16: any = (APT16 as any).default;
  APT17: any = (APT17 as any).default;
  APT18: any = (APT18 as any).default;
  APT19: any = (APT19 as any).default;
  APT28: any = (APT28 as any).default;
  APT30: any = (APT30 as any).default;
  APT32: any = (APT32 as any).default;
  APT29: any = (APT29 as any).default;
  APT33: any = (APT33 as any).default;
  APT37: any = (APT37 as any).default;
  APT38: any = (APT38 as any).default;
  APT39: any = (APT39 as any).default;
  APT41: any = (APT41 as any).default;
  andriel: any = (andriel as any).default;
  ajax: any = (ajax as any).default;
  APT1: any = (APT1 as any).default;
  APT12: any = (APT12 as any).default;
  axiom: any = (axiom as any).default;
  Carbanak: any = (Carbanak as any).default;
  Cleaver: any = (Cleaver as any).default;
  Deep_panda: any = (Deep_panda as any).default;
  ke3chang: any = (ke3chang as any).default;
  Maofee: any = (Maofee as any).default;
  Dark_Caracal: any = (Dark_Caracal as any).default;
  Dragonfly_2: any = (Dragonfly_2 as any).default;
  Turla: any = (Turla as any).default;
  admin338: any = (admin338 as any).default;
  BlackdoorDiplomacy: any = (BlackdoorDiplomacy as any).default;
  BlackOasis: any = (BlackOasis as any).default;
  BlackTech: any = (BlackTech as any).default;
  Blue_Mockingbird: any = (Blue_Mockingbird as any).default;
  Bouncing_Golf: any = (Bouncing_Golf as any).default;
  BRONZE_BUTLER: any = (BRONZE_BUTLER as any).default;
  Chimera: any = (Chimera as any).default;
  Cobalt_Group: any = (Cobalt_Group as any).default;
  CopyKittens: any = (CopyKittens as any).default;
  CostaRicto: any = (CostaRicto as any).default;
  Dragonfly: any = (Dragonfly as any).default;
  Darkhotel: any = (Darkhotel as any).default;
  DragonOK: any = (DragonOK as any).default;
  Dust_Storm: any = (Dust_Storm as any).default;
  Elderwood: any = (Elderwood as any).default;
  Equation: any = (Equation as any).default;
  Evilnum: any = (Evilnum as any).default;
  Ferocious_Kitten: any = (Ferocious_Kitten as any).default;
  FIN4: any = (FIN4 as any).default;
  FIN5: any = (FIN5 as any).default;
  FIN6: any = (FIN6 as any).default;
  FIN7: any = (FIN7 as any).default;
  FIN8: any = (FIN8 as any).default;
  FIN10: any = (FIN10 as any).default;
  Fox_kitten: any = (Fox_kitten as any).default;
  Frankenstein: any = (Frankenstein as any).default;
  GALLIUM: any = (GALLIUM as any).default;
  Gamaredon_Group: any = (Gamaredon_Group as any).default;
  GCMAN: any = (GCMAN as any).default;
  GOLD_SOUTHFIELD: any = (GOLD_SOUTHFIELD as any).default;
  Gorgon_Group: any = (Gorgon_Group as any).default;
  Group5: any = (Group5 as any).default;
  HAFNIUM: any = (HAFNIUM as any).default;
  Higaisa: any = (Higaisa as any).default;
  Honeybee: any = (Honeybee as any).default;
  Inceprtion: any = (Inceprtion as any).default;
  IndigoZebra: any = (IndigoZebra as any).default;
  Indik_Spider: any = (Indik_Spider as any).default;
  Kimsuky: any = (Kimsuky as any).default;
  Lazarus_Group: any = (Lazarus_Group as any).default;
  Leafminer: any = (Leafminer as any).default;
  Leviathan: any = (Leviathan as any).default;
  Lotus_Blossom: any = (Lotus_Blossom as any).default;
  Machete: any = (Machete as any).default;
  Magic_Hound: any = (Magic_Hound as any).default;
  menuPass: any = (menuPass as any).default;
  Mofang: any = (Mofang as any).default;
  Molerats: any = (Molerats as any).default;
  MuddyWater: any = (MuddyWater as any).default;
  Mustang_Panda: any = (Mustang_Panda as any).default;
  Naikon: any = (Naikon as any).default;
  NEODYMIUM: any = (NEODYMIUM as any).default;
  Night_Dragon: any = (Night_Dragon as any).default;
  Nomadic_Octopus: any = (Nomadic_Octopus as any).default;
  OilRig: any = (OilRig as any).default;
  Operation_Wocao: any = (Operation_Wocao as any).default;
  Orangeworm: any = (Orangeworm as any).default;
  Patchowrk: any = (Patchowrk as any).default;
  PittyTiger: any = (PittyTiger as any).default;
  PLATINUM: any = (PLATINUM as any).default;
  Posedon_Group: any = (Posedon_Group as any).default;
  PROMETHIUM: any = (PROMETHIUM as any).default;
  Putter_Panda: any = (Putter_Panda as any).default;
  Rancor: any = (Rancor as any).default;
  Rocke: any = (Rocke as any).default;
  RTM: any = (RTM as any).default;
  Sandworm_Team: any = (Sandworm_Team as any).default;
  Scarlet_Mimic: any = (Scarlet_Mimic as any).default;
  Sharpshooter: any = (Sharpshooter as any).default;
  Sidewinder: any = (Sidewinder as any).default;
  Silence: any = (Silence as any).default;
  Silent_Librarian: any = (Silent_Librarian as any).default;
  SilverTerrier: any = (SilverTerrier as any).default;
  Sowbug: any = (Sowbug as any).default;
  Stealth_Falcon: any = (Stealth_Falcon as any).default;
  Strider: any = (Strider as any).default;
  Suckfly: any = (Suckfly as any).default;
  TA459: any = (TA459 as any).default;
  TA505: any = (TA505 as any).default;
  TA511: any = (TA511 as any).default;
  TeamTNT: any = (TeamTNT as any).default;
  TEMP_Veles: any = (TEMP_Veles as any).default;
  The_White_Company: any = (The_White_Company as any).default;
  Threat_Group_1314: any = (Threat_Group_1314 as any).default;
  Threat_Group_3390: any = (Threat_Group_3390 as any).default;
  Thrip: any = (Thrip as any).default;
  Tonto_Team: any = (Tonto_Team as any).default;
  Transparent_Tribe: any = (Transparent_Tribe as any).default;
  Tropic_Trooper: any = (Tropic_Trooper as any).default;
  Volatile_Cedar: any = (Volatile_Cedar as any).default;
  Whitefly: any = (Whitefly as any).default;
  Windigo: any = (Windigo as any).default;
  Windshift: any = (Windshift as any).default;
  Winnti_Group: any = (Winnti_Group as any).default;
  WIRTE: any = (WIRTE as any).default;
  Wizad_Spider: any = (Wizad_Spider as any).default;
  ZIRCONIUM: any = (ZIRCONIUM as any).default;




  constructor() { }
  getGroup() {
    const names: any = []


    this.ajax.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT30.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT32.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT33.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT37.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT38.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT39.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT41.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT16.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT17.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT18.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT19.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APTC36.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT3.objects.forEach((element: any) => {
      names.push(element)
    });

    this.andriel.objects.forEach((element: any) => {
      names.push(element)
    });
    this.APT28.objects.forEach((element: any) => {
      names.push(element)
    });
    this.admin338.objects.forEach((element: any) => {
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
    this.Dark_Caracal.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Dragonfly_2.objects.forEach((element: any) => {
      names.push(element)
    });
    this.admin338.objects.forEach((element: any) => {
      names.push(element)
    });
    this.BlackdoorDiplomacy.objects.forEach((element: any) => {
      names.push(element)
    });
    this.BlackOasis.objects.forEach((element: any) => {
      names.push(element)
    });
    this.BlackTech.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Blue_Mockingbird.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Bouncing_Golf.objects.forEach((element: any) => {
      names.push(element)
    });
    this.BRONZE_BUTLER.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Chimera.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Cobalt_Group.objects.forEach((element: any) => {
      names.push(element)
    });
    this.CopyKittens.objects.forEach((element: any) => {
      names.push(element)
    });
    this.CostaRicto.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Dragonfly.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Darkhotel.objects.forEach((element: any) => {
      names.push(element)
    });
    this.DragonOK.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Dust_Storm.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Elderwood.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Equation.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Evilnum.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Evilnum.objects.forEach((element: any) => {
      names.push(element)
    });
    this.FIN4.objects.forEach((element: any) => {
      names.push(element)
    });
    this.FIN6.objects.forEach((element: any) => {
      names.push(element)
    });
    this.FIN5.objects.forEach((element: any) => {
      names.push(element)
    });
    this.FIN7.objects.forEach((element: any) => {
      names.push(element)
    });
    this.FIN8.objects.forEach((element: any) => {
      names.push(element)
    });
    this.FIN10.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Fox_kitten.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Frankenstein.objects.forEach((element: any) => {
      names.push(element)
    });
    this.GALLIUM.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Gamaredon_Group.objects.forEach((element: any) => {
      names.push(element)
    });
    this.GCMAN.objects.forEach((element: any) => {
      names.push(element)
    });
    this.GOLD_SOUTHFIELD.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Gorgon_Group.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Group5.objects.forEach((element: any) => {
      names.push(element)
    });
    this.HAFNIUM.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Higaisa.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Honeybee.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Inceprtion.objects.forEach((element: any) => {
      names.push(element)
    });
    this.IndigoZebra.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Indik_Spider.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Kimsuky.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Lazarus_Group.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Leafminer.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Leviathan.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Lotus_Blossom.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Machete.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Magic_Hound.objects.forEach((element: any) => {
      names.push(element)
    });
    this.menuPass.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Mofang.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Molerats.objects.forEach((element: any) => {
      names.push(element)
    });
    this.MuddyWater.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Mustang_Panda.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Naikon.objects.forEach((element: any) => {
      names.push(element)
    });
    this.NEODYMIUM.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Night_Dragon.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Nomadic_Octopus.objects.forEach((element: any) => {
      names.push(element)
    });
    this.OilRig.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Operation_Wocao.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Orangeworm.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Patchowrk.objects.forEach((element: any) => {
      names.push(element)
    });
    this.PittyTiger.objects.forEach((element: any) => {
      names.push(element)
    });
    this.PLATINUM.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Posedon_Group.objects.forEach((element: any) => {
      names.push(element)
    });
    this.PROMETHIUM.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Putter_Panda.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Rancor.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Rocke.objects.forEach((element: any) => {
      names.push(element)
    });
    this.RTM.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Sandworm_Team.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Scarlet_Mimic.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Sharpshooter.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Sidewinder.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Silence.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Silent_Librarian.objects.forEach((element: any) => {
      names.push(element)
    });
    this.SilverTerrier.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Sowbug.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Stealth_Falcon.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Strider.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Suckfly.objects.forEach((element: any) => {
      names.push(element)
    });
    this.TA459.objects.forEach((element: any) => {
      names.push(element)
    });
    this.TA505.objects.forEach((element: any) => {
      names.push(element)
    });
    this.TA511.objects.forEach((element: any) => {
      names.push(element)
    });
    this.TeamTNT.objects.forEach((element: any) => {
      names.push(element)
    });
    this.TEMP_Veles.objects.forEach((element: any) => {
      names.push(element)
    });
    this.The_White_Company.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Threat_Group_1314.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Threat_Group_3390.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Thrip.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Tonto_Team.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Transparent_Tribe.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Tropic_Trooper.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Volatile_Cedar.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Whitefly.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Windigo.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Windshift.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Winnti_Group.objects.forEach((element: any) => {
      names.push(element)
    });
    this.WIRTE.objects.forEach((element: any) => {
      names.push(element)
    });
    this.Wizad_Spider.objects.forEach((element: any) => {
      names.push(element)
    });
    this.ZIRCONIUM.objects.forEach((element: any) => {
      names.push(element)
    });




    return names;
  }
}
