import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginPayload } from '../loginpayload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  islogged=true;
  constructor(private loginService:LoginService,private rout:Router){

  }

  login(creds:any){
    let payload = {username:creds.username,password:creds.password}
    this.loginService.login(payload).subscribe(
      token=>{
        let authtoken= token.token;
      this.islogged=true;
      localStorage.setItem("token",authtoken);
      localStorage.setItem("islogged","true");
      
      this.rout.navigate(['consignment']).then(()=>window.location.reload());
    },err=>{
    this.islogged = false;
    });

  }




}
