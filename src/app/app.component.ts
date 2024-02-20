import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'login-azure-demo';
  loggedIn: boolean = false;

  constructor(private msalService: MsalService) {}

  ngOnInit(): void {
    this.checkAccount();

    // Suscribirse al evento de inicio de sesión
    this.msalService.handleRedirectObservable().subscribe((result) => {
      if (result && result.account) {
        localStorage.setItem('loggedIn', 'true');
        this.loggedIn = true;
      }
    });
  }

  checkAccount() {
    const account = this.msalService.instance.getActiveAccount();
    if (account || localStorage.getItem('loggedIn') === 'true') {
      this.loggedIn = true;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logout();
    localStorage.removeItem('loggedIn');
    this.loggedIn = false;
  }
}
