import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-brazil-data',
  templateUrl: './brazil-data.component.html',
  styleUrls: ['./brazil-data.component.scss']
})
export class BrazilDataComponent implements OnInit {

  states: any[] = [];
  country = 'brazil';
  data: any;

  constructor(private router: Router,  private appService: AppService) { }

  ngOnInit(): void {
    this.getList();
    this.getCountryData();
  }

  getCountryData() {
    this.appService.getPerCountry(this.country).subscribe(data => {
        if(data.Response != 'False'){
          this.data = data;
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

}
