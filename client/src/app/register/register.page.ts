import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[AppserviceService]
})
export class RegisterPage implements OnInit {
showSuccesMessage:boolean;
serverErrorMessage:string;
  constructor(private appservice:AppserviceService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.appservice.postUser(form.value).subscribe(
      res =>{
        this.showSuccesMessage=true;
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
}