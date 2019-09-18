import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { Distributor } from '../distributormodel';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   currentUser:string = '';
  public isenabled:boolean=false;
  public text: string = 'START DAY';

  constructor(private appservice:AppserviceService,private router:Router) { 
  
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
   // alert("selected dist name = "+distDetails.dname);
    this.router.navigateByUrl('/product-list'+"/"+ distDetails.dname);
    }
   /*  enableButton2() {
      document.getElementById("button2").disabled = false;
  } */



  enableButton2(input){
    if(input !== ''){
      //enable the button
      this.isenabled=true; 
      }else{
      //disable the button
      this.isenabled=false;
      }
  }

  public changeText(text): void {
    if(text === 'END DAY') { 
      this.text = 'START DAY'
    } else {
      this.text = 'END DAY'
    }
  }

}
