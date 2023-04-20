import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarmemberlistService } from '@app/core/services/carmemberlist.service';
@Component({
  selector: 'app-carmemberadd',
  templateUrl: './carmemberadd.component.html',
  styleUrls: ['./carmemberadd.component.scss']
})
export class CarmemberAddComponent {

  hospcode: any;
  car_number: any;
  model: any;
  brand: any;
  color: any;
  year: any;
  type_id: any;
  regist_num: any;
  detail: any;
  active: any;

  file: any;
  file_name: any;
  constructor(private carmemberlistService: CarmemberlistService, private router: Router){}

  async postCarMember(f: NgForm){

    const formData = new FormData();

    formData.append('hospcode', f.value.hospcode);
    formData.append('car_number', f.value.car_number)
    formData.append('model', f.value.model)
    formData.append('brand', f.value.brand)
    formData.append('color', f.value.color)
    formData.append('year', f.value.year)
    formData.append('type_id', f.value.type_id)
    formData.append('regist_num', f.value.regist_num)
    formData.append('detail', f.value.detail)
    formData.append('active', f.value.active)
    formData.append('car_img', this.file)

    await this.carmemberlistService.postCarMember(formData).then((r) => {
      console.log(r)
      this.router.navigate(['/carmember']);
    })

  }

  fileChanged(file: any) {
    this.file_name = file.target.files[0].name;
    this.file = file.target.files[0];

    console.log('file: '+this.file + " file_name: "+ this.file_name)
  }


}
