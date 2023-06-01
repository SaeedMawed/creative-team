import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ServicesComponent,
    WhyChooseUsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
