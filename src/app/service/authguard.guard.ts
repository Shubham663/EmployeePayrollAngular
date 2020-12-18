import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate() {
    if(localStorage.getItem('token')!=null){
      return true;
    }
    else{
      alert("Not logged in.")
      this.router.navigate
    }
      return true;
  }
  
}
