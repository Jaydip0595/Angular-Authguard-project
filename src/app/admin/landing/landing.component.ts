import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

 constructor(private authServics:AuthService){}

  ngOnInit(): void {
 }

 logout(){
  this.authServics.logout();
 }
}
