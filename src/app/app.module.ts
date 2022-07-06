import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ToolComponent,
    SearchComponent,
    FooterComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
