import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AppserviceService } from '../appservice.service';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productin-kg',
  templateUrl: './productin-kg.page.html',
  styleUrls: ['./productin-kg.page.scss'],
})
export class ProductinKgPage implements OnInit {

  public currentCrop = "";
  public currentDist = "";

  current_cropname:string = '';
  count: number = 0; 
  count1:number=0;
  count2:number=0;
  count3:number=0;
  count4:number=0;

  
   weight:number=0;
   weight1:number=0;
   weight2:number=0;
   weight3:number=0;
   weight4:number=0;


   totalweight=0;
   totalweight1=0;
   totalweight2=0;
   totalweight3=0;
   totalweight4=0;
 
   showSuccesMessage:boolean;
serverErrorMessage:string;

  public  GrandTotal=0;

  constructor(private appservice:AppserviceService,public alertController: AlertController,private router:Router,private _route:ActivatedRoute) { 
  //  this.current_cropname = sessionStorage.getItem('current_cropname');
    this.GrandTotal=this.totalweight+this.totalweight1+this.totalweight2+this.totalweight3+this.totalweight4;
    console.log('grandtotal'+this.GrandTotal);
  
}
  ngOnInit() {

    debugger;
    this._route.paramMap.subscribe(
      params=>{
        //console.log(params);
       // alert('Crop Name = '+params.get('cropName'));
        this.currentCrop = params.get('cropName');
       // this.currentDist = params.get('distname');
       this.appservice.kG.cropname= this.currentCrop ;
        console.log("hi"+this.appservice.kG.cropname);
      }
    )
  }


  onSubmit(form:NgForm){
    this.appservice.postGrandTotal(form.value).subscribe(
      res =>{
       

       //localstorage for currentcropname
        localStorage.setItem('currentCrop',JSON.stringify(form.value.cropname));
        console.log('val  ---- ',form.value.cropname)
        console.log('from loca', localStorage.getItem('current_Crop'));


      //localstorage for GrandTotalQuantity
        localStorage.setItem('current_Cropgrandtot',JSON.stringify(form.value.GrandTotalQuantity));
       console.log('val  ---- ',form.value.GrandTotalQuantity)
       console.log('from loca', localStorage.getItem('current_Cropgrandtot'));
         
   









        setTimeout(()=>this.showSuccesMessage=false,4000)
      },
      err=>{
      if(err.status === 422){
        this.serverErrorMessage=err.error.join('<br/>');
      }
      else
      this.serverErrorMessage="something went wrong";
      }
    );

}



  fifty(event){
    this.count++
    console.log(this.count);
    console.log("in fifty")
    console.log(event.srcElement.id)
    this.weight=event.srcElement.id;
    
    this.totalweight=this.count*this.weight;

    console.log(this.totalweight);
    this.GrandTotal=this.totalweight;
   // return this.GrandTotal;
   this.GrandTotal=this.totalweight+this.totalweight1+this.totalweight2+this.totalweight3+this.totalweight4;
   console.log('grandtotal'+this.GrandTotal);
    }
    
    
    twenty(event){
      this.count1++
      console.log(this.count1);
      console.log("in twenty")

      console.log(event.srcElement.id)
      this.weight1=event.srcElement.id;
      
      this.totalweight1=this.count1*this.weight1;
  
      console.log(this.totalweight1);
      this.GrandTotal=this.totalweight1;
      this.GrandTotal=this.totalweight+this.totalweight1+this.totalweight2+this.totalweight3+this.totalweight4;
      console.log('grandtotal'+this.GrandTotal);


    }

    ten(event){
      this.count2++
      console.log(this.count2);
      console.log("in ten")

      console.log(event.srcElement.id)
      this.weight2=event.srcElement.id;
      
      this.totalweight2=this.count2*this.weight2;
  
      console.log(this.totalweight2);
      this.GrandTotal=this.totalweight2;
      this.GrandTotal=this.totalweight+this.totalweight1+this.totalweight2+this.totalweight3+this.totalweight4;
      console.log('grandtotal'+this.GrandTotal);


    }

    five(event){
      this.count3++
      console.log(this.count3);
      console.log("in five")

      console.log(event.srcElement.id)
      this.weight3=event.srcElement.id;
      
      this.totalweight3=this.count3*this.weight3;
  
      console.log(this.totalweight3);
      this.GrandTotal=this.totalweight3;
      this.GrandTotal=this.totalweight+this.totalweight1+this.totalweight2+this.totalweight3+this.totalweight4;
      console.log('grandtotal'+this.GrandTotal);

    }


    One(event){
      this.count4++
      console.log(this.count4);
      console.log("in one")

      console.log(event.srcElement.id)
      this.weight4=event.srcElement.id;
      
      this.totalweight4=this.count4*this.weight4;
  
      console.log(this.totalweight4);
     // this.GrandTotal=this.totalweight4+this.totalweight3+this.totalweight2+this.totalweight1+this.totalweight4;
     // console.log(this.GrandTotal);
     this.GrandTotal=this.totalweight+this.totalweight1+this.totalweight2+this.totalweight3+this.totalweight4;
      console.log('grandtotal'+this.GrandTotal);  

    }
    
  
    async presensent(){
      const alert =await this.alertController.create({
      message:'saved'
      })
    }
  


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!!!',
      message: 'Do you want to save quantity',
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
            console.log(this.GrandTotal);
            this.router.navigateByUrl('/product-list'/*,this.GrandTotal*/);
          }
        }
      ]
    });
 
    await alert.present();
    
  }

}
