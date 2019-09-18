import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { Distributor } from '../distributormodel';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentUser:string = '';
  constructor(private appservice:AppserviceService,private router:Router) { 
    debugger
    this.currentUser = sessionStorage.getItem('current_username');

   // this.currentUser = localStorage.getItem('current_username');
   // alert('From Dasboard = '+localStorage.getItem('current_username'));
  }
    lstdistributor:Distributor[];
  ngOnInit() {
    this.appservice.getdistributors()
    .subscribe
    (
      data=>
      {
         this.lstdistributor=data;
      }
    );
  
  }

  SelectProduct(distDetails){
    alert("selected dist name = "+distDetails.dname);
    this.router.navigateByUrl('/tab3'+"/"+ distDetails.dname);
    }


}
