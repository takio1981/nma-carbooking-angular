import { Component ,OnInit} from '@angular/core';
import { CarmemberlistService } from '@app/core/services/carmemberlist.service';
import { LazyLoadScriptService } from '@app/shared/services/lazy-load-script.service';
import { UtcConverterService } from '@app/shared/services/utc-converter.service';

@Component({
  selector: 'app-carmember',
  templateUrl: './carmember.component.html',
  styleUrls: ['./carmember.component.scss']
})
export class CarmemberComponent {
 
  carmemberlist: any = [];
  // constructor(private carmemberlistService: CarmemberlistService){}
  constructor(private _lazyLoadService: LazyLoadScriptService,private _dateConverter: UtcConverterService,private carmemberlistService: CarmemberlistService){
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
}
