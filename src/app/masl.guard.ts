import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class MaslGuard implements CanActivate {
  constructor(private authService: MsalService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Verificar si hay un usuario activo en MSAL
    const activeAccount = this.authService.instance.getActiveAccount();
    if (activeAccount) {
      return true;
    }

    // Si no hay usuario activo en MSAL, verificar en localStorage
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      return true;
    }

    // Si no hay usuario activo ni en MSAL ni en localStorage, redirigir al inicio de sesión
    console.log('User not logged in!');
    return false;
  }
}
