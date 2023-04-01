import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './api.service';

const routes = {
  project: '/carmember'
}

@Injectable({
  providedIn: 'root'
})
export class CarmemberlistService {

  constructor(private apiService: ApiService) { }

  async getCarMemberList(){
    const url = `${routes.project}/getCarMemberList`
    const data = this.apiService.get(url)

    return await lastValueFrom(data)
  }

  async deleteCarMember(car_id: string){
    const url = `${routes.project}/deleteCarMember/`+car_id
    const data =  this.apiService.delete(url)

    return await lastValueFrom(data)
  }

  async editCarMember(car_id: object){
    const url = `${routes.project}/editPerson`
    const data =  this.apiService.putMultipart(url, car_id)

    return await lastValueFrom(data)
  }
}
