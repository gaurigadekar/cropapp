import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Distributor } from '../distributormodel';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.page.html',
  styleUrls: ['./distributor.page.scss'],
})
export class DistributorPage implements OnInit {
  // distribtrs:Distributor[]
  constructor(private appservice:AppserviceService) { }

   ngOnInit() {
   // this.appservice.getdistributor().subscribe(data=>{
     // this.distribtrs=data;
    }

    /* deleteUser(user: User): void {
      this.userService.deleteUser(user.id)
        .subscribe( data => {
          this.users = this.users.filter(u => u !== user);
        })
    };
  
    editUser(user: User): void {
      localStorage.removeItem("editUserId");
      localStorage.setItem("editUserId", user.id.toString());
      this.router.navigate(['edit-user']);
    };
  
    addUser(): void {
      this.router.navigate(['add-user']);
    }; */
  //}

  }




