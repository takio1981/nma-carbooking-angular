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
}