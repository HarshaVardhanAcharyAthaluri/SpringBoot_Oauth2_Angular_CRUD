import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consignmentmodel } from './consignmentmodel';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

 

  constructor(private http:HttpClient) { 

  }

  getConsignments():Observable<Consignmentmodel[]>{   
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders()
   .set('content-type', 'application/json')
   .set('Authorization', 'Bearer '+token);

    return this.http.get<Consignmentmodel[]>("http://localhost:8080/consignments",{headers});
  }


}
