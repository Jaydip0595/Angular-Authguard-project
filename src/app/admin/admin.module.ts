import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AdminsComponent } from './admins/admins.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    LandingComponent,
    AdminsComponent,
    AboutComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
