import { RouterModule } from '@angular/router';
import { PageNamePipe } from './../shared/page-name.pipe';
import { NgModule } from "@angular/core";
import { AboutExtraPageComponent } from "./about-extra-page/about-extra-page.component";
import { AboutPageComponent } from "./about-page.component";
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    AboutPageComponent,
    AboutExtraPageComponent,
  ],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AboutPageComponent, children: [{path: 'extra', component: AboutExtraPageComponent}]},
    ])
  ],
  exports:[RouterModule]
})

export class AboutPageModule {

}
