import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  uf: string;
  flag = '';
  data: any;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.uf = params.get('uf');
      this.flag = `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${this.uf}.png`;
      this.getDetails();
    });
  }

  getDetails() {
    this.appService.getPerState(this.uf).subscribe(data => {
      this.data = data;
    })
  }
  
}
