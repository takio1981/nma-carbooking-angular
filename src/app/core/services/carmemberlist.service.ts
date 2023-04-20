import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private httpOptions = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data') };
  constructor(private apiService: ApiService,private httpClient: HttpClient) { }

  private setHttpOption() {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

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

  async postCarMember(car_id: object){
    const url = `${routes.project}/postCarMember`
    const data =  this.apiService.postMultipart(url, car_id)

    return await lastValueFrom(data)
  }

  async getCarMemberById(car_id: string){
    const url = `${routes.project}/getCarMemberById/`+car_id
    const data =  this.apiService.get(url)

    return await lastValueFrom(data)
  }

  async editCarMember(car_id: object){
    const url = `${routes.project}/editCarMember`
    const data =  this.apiService.putMultipart(url, car_id)

    return await lastValueFrom(data)
  }

}
