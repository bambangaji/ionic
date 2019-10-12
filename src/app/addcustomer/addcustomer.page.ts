import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'; 

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
 name_customer:string = "";
 desc_customer:string = "";
  constructor(
   
  ) { }

  ngOnInit() {
  }
createdProses(){
  console.log( 'Name :' + this.name_customer);
}
}
