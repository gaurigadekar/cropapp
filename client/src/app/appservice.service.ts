import { Injectable } from '@angular/core';
import { User } from './user.model';
import { formatDate, DatePipe } from '@angular/common';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { LoginModel } from './loginmodel';
import { Distributor } from './distributormodel';
import { Observable } from 'rxjs';
import { Product_list } from './product_list';
//import { Order_list } from './order_list';
import { TotalKg } from './totalKg.model';
import { Vegitable_Prodlist } from './vegitable_prodlist';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  //apiBaseUrl:string;
  //apiBaseUrl:'http://localhost:4000/users';
users:User={
  username:'',
  hash:'',
  firstName:'',
  lastName:'',
 //createdDate:Date.toString()
};


kG:TotalKg={
 //dname:'',
 cropname:'',
 totalweight50kg:null,
 totalweight20kg:null,
 totalweight10kg:null,
 totalweight5kg:null,
 totalweight1kg:null,
  GrandTotalQuantity:null
};

model:LoginModel={
  username:'',
hash:'',
};

distributors:Distributor={
   dname:'',
   daddress:''
};
products:Product_list={
  croptype:'',
  cropname:'',
  weightInKg:null,
 // GrandTotal:null
  
};

   /*  orders:Order_list={
     product_id:''
    } */
  vegprod:Vegitable_Prodlist={
    croptype:'',
  cropname:'',
  weightInKg:null,
  }




  constructor(private http:HttpClient) { 

  }
  postUser(postuser:User){
  return this.http.post('http://localhost:4000/users/register',postuser);
  }
  login(mod:LoginModel){
    return this.http.post('http://localhost:4000/users/authenticate',mod) }
   
  
    postGrandTotal(totkg:TotalKg){
      console.log("hi from postGrandtotal of appservice")
      console.log(totkg);
      return this.http.post('http://localhost:4000/ordersdetails/createorder',totkg) 
     // console.log(totkg);

    }

   
    

   getdistributors():Observable<any>{
      return this.http.get('http://localhost:4000/distributor/');
    } 

    getproduct():Observable<any>{
      return this.http.get('http://localhost:4000/productlist/');

    }


    getvegproduct():Observable<any>{
      return this.http.get('http://localhost:4000/vegitablecroplist/');

    }


    saveorder():Observable<any>{
     // let params1=new HttpParams().set('_id',"5d15f174ea2c873994ac21a9")
      //return this.http.get('http://localhost:4000/productlist/:_id',{params:params1});
      return this.http.get('http://localhost:4000/productlist/');
  
    }

    /* postOrder(ordrs:Order_list){
      return this.http.post('http://localhost:4000/ordersdtl/addorders',ordrs);
   } */
      

    getuserprofile(user){
     if(user){
      return (user);
     }
    }
    


  

   } 
  



  
