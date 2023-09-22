import { Component } from '@angular/core';
import { ConsignmentService } from './consignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consignment_management_Ui';
  isLoggedIn:any;

  ngOnInit(){
   this.isLoggedIn = localStorage.getItem("islogged");
   if(!this.isLoggedIn){
    this.router.navigate(['login']);
   }
  }
  constructor(private router:Router){

  }

  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['login']);

  }
  
}
