import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarmemberlistService } from '@app/core/services/carmemberlist.service';

@Component({
  selector: 'app-carmember-edit',
  templateUrl: './carmember-edit.component.html',
  styleUrls: ['./carmember-edit.component.scss']
})
export class CarmemberEditComponent implements OnInit {

  car_id: any;
  file: any;
  file_name: any;

  carmember: any;

  carmemberForm!: FormGroup;
  constructor(private route: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private carmemberlistService: CarmemberlistService){

    this.createForm()
  }

  ngOnInit(): void {
    this.car_id = this.route.snapshot.params

    this.getCarMemberById(this.car_id.car_id,)
  }

  createForm(){
    this.carmemberForm = this.formBuilder.group({
      hospcode: [''],
      car_id: [''],
      car_number: [''],
      model: [''],
      brand: [''],
      color: [''],
      year: [''],
      type_id: [''],
      regist_num: [''],
      detail: [''],
      active: [''],
      car_img: [''],
    })
  }

  async saveCarmember(){
    
    const formData = new FormData();

    formData.append('hospcode', this.carmemberForm.value.hospcode);
    formData.append('car_id', this.carmemberForm.value.car_id)
    formData.append('car_number', this.carmemberForm.value.car_number)
    formData.append('model', this.carmemberForm.value.model)
    formData.append('brand', this.carmemberForm.value.brand)
    formData.append('color', this.carmemberForm.value.color)
    formData.append('year', this.carmemberForm.value.year)
    formData.append('type_id', this.carmemberForm.value.type_id)
    formData.append('regist_num', this.carmemberForm.value.regist_num)
    formData.append('detail', this.carmemberForm.value.detail)
    formData.append('active', this.carmemberForm.value.active)
    formData.append('car_img', this.file)

    await this.carmemberlistService.editCarMember(formData).then((r) => {
      console.clear()
      this.router.navigate(['/carmember']);
    })

  }

  fileChanged(file: any){
    this.file_name = file.target.files[0].name;
    this.file = file.target.files[0];

    console.log('file: '+ this.file +" file_name: "+ this.file_name)
  }

  async getCarMemberById(car_id: string){
    let rs: any = await this.carmemberlistService.getCarMemberById(car_id)

    console.log(rs[0])

    this.carmemberForm.setValue({
      hospcode: rs[0].hospcode,
      car_id: rs[0].car_id,
      car_number: rs[0].car_number,
      model: rs[0].model,
      brand: rs[0].brand,
      color: rs[0].color,
      year: rs[0].year,
      type_id: rs[0].type_id,
      regist_num: rs[0].regist_num,
      detail: rs[0].detail,
      active: rs[0].active,
      car_img: ''
    })

    console.clear()
  }

}
