import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username:string;
  public password:string;
  public a:string;
  public b:string;
  public hasil:string= this.a + this.b;
  title = 'namaweb';
  public test:string;
  constructor(
    public alertController: AlertController,
    private router : Router
  ) { }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
 
  login(){console.log("Username:" + this.username);
  console.log("Password:" + this.password);
  }
  tambah(){
    console.log( this.a + this.b);
  }
  addCustomer(){
    this.router.navigate(['/addcustomer'])

  }
  on(){
    console.log(this.on);
  }
  goRegister(){
    this.router.navigate(['/register'])
  }
  openWeather(){
    this.router.navigate(['/openweather'])
  }
}

