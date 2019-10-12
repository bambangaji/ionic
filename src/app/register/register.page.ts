import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  email:string;
  address:string;
  password:string;
  
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
 register(){
   console.log( "username :" + this.username); 
   console.log( "email :" + this.email);
   console.log( "address :" + this.address);
   console.log( "password :" + this.password);
   alert("Registered succesfully please login");
   this.router.navigate(['/home'])
 }
}
