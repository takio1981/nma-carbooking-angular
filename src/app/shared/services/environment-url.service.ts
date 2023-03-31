import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {
  apiUrl: string = environment.apiUrl;
  secretKey: string = environment.secretKey;
  timeout: number = environment.timeout;

  constructor() { }
}
