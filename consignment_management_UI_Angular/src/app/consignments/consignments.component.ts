import { Component } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { Consignmentmodel } from '../consignmentmodel';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-consignments',
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.css']
})
export class ConsignmentsComponent {
   consignments:Consignmentmodel[] = [];

  constructor(private serv:ConsignmentService){

  }

  ngOnInit(){
     this.serv.getConsignments().subscribe(x=>{
    this.consignments = x;
    });
  }
}
