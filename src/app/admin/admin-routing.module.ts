import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminsComponent } from './admins/admins.component';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"users",component:UsersComponent},
    {path:"about",component:AboutComponent},
    {path:"admins",component:AdminsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
