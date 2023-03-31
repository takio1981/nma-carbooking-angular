import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './api.service';

const routes = {
    projects: '/login'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private apiService: ApiService) { }

  async doLogin(data: object) {
    const _url = `${routes.projects}`;
    const user$ = this.apiService.post(_url, data);

    return await lastValueFrom(user$);
  }
  
  async doLogout(data: object, user_id: any) {
    const _url = `/logout/`+user_id;
    const user$ = this.apiService.put(_url, data);

    return await lastValueFrom(user$);
  }

}