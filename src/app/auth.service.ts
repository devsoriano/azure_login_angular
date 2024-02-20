import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new Subject<boolean>();
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    // Verificar si hay información de autenticación almacenada en localStorage al cargar la aplicación
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      this.setLoggedIn(true);
    }
  }

  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
    // Almacenar el estado de autenticación en localStorage
    localStorage.setItem('loggedIn', value ? 'true' : 'false');
  }
}
