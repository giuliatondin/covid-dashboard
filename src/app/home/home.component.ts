import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  country: string;
  data: any;
  states: any[] = [];
  flags: any[] = [];

  constructor(private router: RouterModule, private appService: AppService) { }

  ngOnInit() {
    this.country = 'brazil';
    this.getCountryData();
    this.getList();
  }

  getCountryData() {
    this.appService.getPerCountry(this.country).subscribe(data => {
      if(data.Response != 'False'){
        const items = [];
        for(const key in data){
          if(data.hasOwnProperty(key)){
            items.push(data[key]);
          }
        }
        this.data = items[0];
      }
    })
  }

  getList() {
    this.appService.getBrazilList().subscribe(data => {
      if(data.Response != 'False'){
        const items = [];
        for(const key in data){
          if(data.hasOwnProperty(key)){
            items.push(data[key]);
          }
        }
        this.states = items[0];
      }
    })
  }

  getFlag(uf){
    this.appService.getStateFlag(uf).subscribe(data => {
      return data;
    })
  }

}
