import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router:Router) { }


  setToken(token:string){
    localStorage.setItem("token",token);
  }


  getToken(){
    localStorage.getItem("token");
  }

  isLoggedIn(){
    if(localStorage.getItem("token") != null)
    return true;
    else
    return false;
  }
  logout(){
    localStorage.clear();
    this.router.navigate(["/"])
  }

  login(data:any):any{
    if(data.email == "admin@gmail.com" && data.password =="123"){
       this.setToken("ldsjkdhjhgdgjdhjdhjdhkd");
       return {status :"success" ,data:{name:"jaydip" ,email:"admin@gmail" ,usertype:"admin"}}
    }
    else{
      return{status:"failed"};
    }

  }
  
}
