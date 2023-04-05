import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarmemberlistService } from '@app/core/services/carmemberlist.service';
import { LazyLoadScriptService } from '@app/shared/services/lazy-load-script.service';
import { UtcConverterService } from '@app/shared/services/utc-converter.service';

@Component({
  selector: 'app-carmember',
  templateUrl: './carmember.component.html',
  styleUrls: ['./carmember.component.scss']
})
export class CarmemberComponent implements OnInit {
 
  carmemberlist: any = [];
  // constructor(private carmemberlistService: CarmemberlistService){}
  constructor(
    private _lazyLoadService: LazyLoadScriptService,
    private _dateConverter: UtcConverterService,
    private carmemberlistService: CarmemberlistService, 
    private route:Router){
    // this.loadStyle();
    // this.loadScript();
  }
  ngOnInit():void{
    this.getCarMemberList();
  }

  async getCarMemberList(){
    let rs = await this.carmemberlistService.getCarMemberList();
    // console.log(rs)
    if(rs['ok']){
      console.log(rs['results'])
      this.carmemberlist = rs['results'];
      console.log(this.carmemberlist)
      console.clear();
    }
  }
  ngAfterViewInit(): void {
    this.getCarMemberList();
  }

  async deleteCarMember(car_id: string){
    await this.carmemberlistService.deleteCarMember(car_id).then((data) => {
       console.log(data)
       setTimeout(()=> {
        this.getCarMemberList();
       },500)
       
    })

  }

  async editCarMember(car_id: string){    
    this.route.navigate(['/carmember/edit/'+ car_id])
  }

  async detailCarMember(car_id: string){    
    this.route.navigate(['/carmember/detail/'+ car_id])
  }

}
