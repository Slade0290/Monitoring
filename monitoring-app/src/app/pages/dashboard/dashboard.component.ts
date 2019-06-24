import { Component, OnInit } from '@angular/core';
import {DatasService} from '../../services/datas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

	//message = "Loading...";

  datas;

    constructor(private datasService:DatasService) {
    this.datasService.getDatas().subscribe(datas=>{
      this.datas=datas;
      console.log(datas);
    })
   }

   

  ngOnInit() {
  }

}
