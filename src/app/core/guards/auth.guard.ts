import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private localStorage: LocalStorageService
    ) {}

    canActivate(): boolean {
        let token = this.localStorage.get('token');

        if (token !== undefined && token != "" && token != null) {
            return true;
        } else {
            sessionStorage.setItem('status', 'nologin');
            this.router.navigateByUrl('/');
            return false;
        }
    }

}