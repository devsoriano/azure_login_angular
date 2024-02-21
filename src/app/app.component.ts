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
    this.msalService.handleRedirectObservable().subscribe((result) => {
      console.log('result::::::', result);
      if (result && result.account) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', result.account.username);
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
    localStorage.removeItem('username');
    this.loggedIn = false;
  }
}
