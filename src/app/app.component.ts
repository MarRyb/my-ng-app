import { Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {LogService} from './log.service';
import {Phone} from './phone';

@Component({
  selector: 'purchase-app',
  styleUrls: ['./app.component.css'],
  template: `<data-comp></data-comp>
             <data-comp></data-comp>`,
  providers: [DataService, LogService]
})
export class AppComponent implements OnInit { 
   
  items: Phone[] = [];
  constructor(private dataService: DataService){}
   
  addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }

  ngOnInit(){
    this.items = this.dataService.getData();
  }
}