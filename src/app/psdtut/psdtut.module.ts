import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { psdtutRoutingModule } from './psdtut-routing.module';
import { PsdtutComponent } from './psdtut.component';
import { HeaderComponent } from './header/header.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { InPageNaviationComponent } from './in-page-naviation/in-page-naviation.component';
@NgModule({
  imports: [
    CommonModule,
    psdtutRoutingModule
  ],
  declarations: [
    PsdtutComponent,
    HeaderComponent,
    OurWorksComponent,
    OurTeamComponent,
    SayHelloComponent,
    FooterComponent,
    ProfileCardComponent,
    InPageNaviationComponent
  ]
})
export class PsdtutModule { }
