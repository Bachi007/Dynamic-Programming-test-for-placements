import { Component, OnInit } from '@angular/core';
import{single} from '../service/data';
import{double} from '../service/data';
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  single:any[]
  double:any[]
  constructor() { 
    
    Object.assign(this, { single })
    
    Object.assign(this, { double })
  }

  ngOnInit() {
  }

}
