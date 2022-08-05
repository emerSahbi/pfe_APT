import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { GrpsInfosComponent } from './grps-infos/grps-infos.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SoftwareComponent } from './software/software.component';
import { STIXComponent } from './stix/stix.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';
import { ToolComponent } from './tool/tool.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'group', component: GroupComponent },
  { path: 'group/:filter', component: GroupComponent },
  { path: 'tool/:filter', component: ToolComponent },
  { path: 'tool', component: ToolComponent },
  { path: 'search', component: SearchComponent },
  { path: 'stix', component: STIXComponent },
  { path: 'info', component: ToolInfoComponent },
  {
    path: 'groupsInfo/:data',
    component: GrpsInfosComponent,
    data: { some_data: 'some value' },
  }, 
  {
    path: 'software/:data',
    component: SoftwareComponent,
    data: { some_data: 'some value' },
  }, 
  
  { path: '**', component: HomeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
