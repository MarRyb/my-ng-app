import { Component } from '@angular/core';
 
@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  clicks:number = 0;
    onChanged(increased:any){
      increased==true ? this.clicks++ : this.clicks--;
    }
}