import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Product_list } from '../product_list';
//import { Order_list } from '../order_list';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Vegitable_Prodlist } from '../vegitable_prodlist';
import { Currentorderdtls } from '../currentorderdtls.model';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  public currentcropgrandtot="";
  public currentcrop="";
  public currentDist = "";
  public currentCrop = ""; 
  
  CurrentorderdtlsArray: Array<Currentorderdtls> = [];
  



  constructor(private _route:ActivatedRoute,public alertController: AlertController,private appservice:AppserviceService,private router:Router) { }

  lstvegproduct:Vegitable_Prodlist[];
  public text: string = 'Start Day';
  lstproduct:Product_list[];
  lstorder:Product_list[];
  showSuccesloginMessage:boolean;

  //lstorder:Order_list[];
  showSuccesMessage:boolean;
serverErrorMessage:string;

  
  ngOnInit() {

 //get localstorage cropname  

    debugger;
    this._route.paramMap.subscribe(
      params=>{
        console.log(params);
        //let distributorName=+params.get('dname');
       // alert('distributorName = '+params.get('distname'));
        this.currentDist = params.get('distname');
      }
    )

    this.appservice.getproduct()
    .subscribe
    (
      data=>
      {  
         this.lstproduct=data;
         localStorage.setItem('current_crop',data['cropname'])
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

    saveArray(){  
       this.currentcrop=JSON.parse(localStorage.getItem('currentCrop'));
      console.log('localstorage currentcrop='+this.currentcrop);
     
     //get localstorage for GrandTotalQuantity
       this.currentcropgrandtot=JSON.parse(localStorage.getItem('current_Cropgrandtot'));
       console.log('localstorage currentcropgrandtot='+this.currentcropgrandtot);
      
     
     let CurrentorderdtlsObj=new Currentorderdtls();
    /*  CurrentorderdtlsObj.cropname=JSON.parse(localStorage.getItem('currentCrop'));
    
     CurrentorderdtlsObj.GrandTotalQuantity=JSON.parse(localStorage.getItem('current_Cropgrandtot'));
     
     this.CurrentorderdtlsArray.push(CurrentorderdtlsObj); */


     this.CurrentorderdtlsArray.push({cropname:this.currentcrop,GrandTotalQuantity:JSON.parse(this.currentcropgrandtot)})

     //this.currentcrop = "";
     //this.currentcropgrandtot = '';
     console.log(this.CurrentorderdtlsArray.push(CurrentorderdtlsObj));
        
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
