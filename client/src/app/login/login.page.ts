import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppserviceService } from '../appservice.service';
import { TabsPage } from '../tabs/tabs.page';
import { NavController } from '@ionic/angular';
//import { AppRoutingModule } from '../app-routing.module';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showSuccesloginMessage:boolean;
  loginserverErrorMessage:string;
  constructor(private appservice:AppserviceService,public navCtrl: NavController,private router:Router) { }
  
  ngOnInit() {
  }
  onSubmit(form :NgForm){
    this.appservice.login(form.value).subscribe(
      res=>{
        
        console.log(res);
       // alert("current user = "+res['username']);
        sessionStorage.setItem('current_username',res['username']);
        //localStorage.setItem('current_username',res['username'])
        this.showSuccesloginMessage=true;
        setTimeout(()=>this.showSuccesloginMessage=false,4000);
        this.router.navigateByUrl('/dashboard')
        
      },
      err=>{if(err.status === 422){
        this.loginserverErrorMessage=err.error.join('<br/>');
      }
      if(err.status ===  404){
        this.loginserverErrorMessage=err.error.join()
      }
      else
      this.loginserverErrorMessage="something went wrong";
      }
    );
    
    }
    
  }

  