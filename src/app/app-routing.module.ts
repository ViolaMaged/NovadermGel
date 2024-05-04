import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsageComponent } from './components/usage/usage.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
{path:'',component:LayoutComponent,
children:[
  {path:'home' , component: HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'usage' , component:UsageComponent},
  {path:'checkout' , component:CheckOutComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
