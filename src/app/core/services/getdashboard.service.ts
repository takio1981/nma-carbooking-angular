import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './api.service';

const routes = {
  project: '/carbooking'
}

@Injectable({
  providedIn: 'root'
})
export class GetdashboardService {

  constructor(private apiService: ApiService) { }

  async getDashboardAll(){
    const url = `${routes.project}/getDashboardAll`
    const data = this.apiService.get(url)

    return await lastValueFrom(data)
  }
}
