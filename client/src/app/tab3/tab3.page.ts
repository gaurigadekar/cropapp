import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Product_list } from '../product_list';
//import { Order_list } from '../order_list';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Vegitable_Prodlist } from '../vegitable_prodlist';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
 
  public currentDist = "";
  public currentCrop = "";
  public current_GrandTotalQuantity="";


  constructor(private _route:ActivatedRoute,public alertController: AlertController,private appservice:AppserviceService,private router:Router) { }
  
  lstvegproduct:Vegitable_Prodlist[];

  lstproduct:Product_list[];
  lstorder:Product_list[];
  showSuccesloginMessage:boolean;

  //lstorder:Order_list[];
  showSuccesMessage:boolean;
serverErrorMessage:string;
  
  ngOnInit() {
    debugger;
    this._route.paramMap.subscribe(
      params=>{
        console.log(params);
        //let distributorName=+params.get('dname');
       // alert('distributorName = '+params.get('distname'));
        this.currentDist = params.get('distname');
      }
    )
    debugger
    this.current_GrandTotalQuantity = localStorage.getItem('current_GrandTotalQuantity');
    debugger
    this.appservice.getproduct()
    .subscribe
    (
      data=>
      {  
         this.lstproduct=data;
      //  localStorage.setItem('current_crop',data['cropname'])

          
        // this.currentCrop =  this.lstproduct[0].cropname as string;
         
      }

    );
    this.appservice.getvegproduct()
    .subscribe
    (
      data=>
      {  
         this.lstvegproduct=data;
          
        
         
      }

    );
    

    this.appservice.saveorder()
      .subscribe
      (
        data=>{
          this.lstorder=data;
          this.showSuccesloginMessage=true;
        }
      );
         
      
       
      
    }
    
    
 
    
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Please select quantity',
      message: '',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          
          text: 'Okay',
          handler: () => {
            debugger;
            this.router.navigateByUrl('/productin-kg'+'/'+ this.currentCrop)
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirmOrder() {
    const alert = await this.alertController.create({
      header: 'confirm!!!!!',
      message: '',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          
          text: 'Okay',
          handler: () => {
           
            this.router.navigateByUrl('/login')
          }
        }
      ]
    });

    await alert.present();
  }


}

