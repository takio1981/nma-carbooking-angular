
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetdashboardService } from '@app/core/services/getdashboard.service';
import { LazyLoadScriptService } from '@app/shared/services/lazy-load-script.service';
import { UtcConverterService } from '@app/shared/services/utc-converter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  dashBoard:any = [];
  car_ready: string;
  carmember: string;
  drive_round: string;
  wait_approved: string;



  constructor(
    private _lazyLoadService: LazyLoadScriptService,
    private _dateConverter: UtcConverterService,
    private getdashboardService: GetdashboardService, 
    private route:Router){
    // this.loadStyle();
    // this.loadScript();
  }
  ngOnInit():void{
    this.getDashboard();
  }

  async getDashboard(){
    let rs = await this.getdashboardService.getDashboardAll();
    console.log(5555555);
    if(rs){
      //console.log(rs[0])
    this.carmember=rs[0].carmember;
    this.drive_round=rs[0].drive_round;
    this.car_ready=rs[0].car_ready;
    this.wait_approved=rs[0].wait_approved;
    }
  }

  ngAfterViewInit(): void {
    //this.getDashboard();
  }

}
