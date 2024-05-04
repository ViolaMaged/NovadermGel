import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsageComponent } from './components/usage/usage.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReviewComponent } from './components/review/review.component';
import { CheckOutComponent } from './components/check-out/check-out.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsageComponent,
    NavComponent,
    LayoutComponent,
    ReviewComponent,
    CheckOutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
