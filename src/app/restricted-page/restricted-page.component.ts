import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.css'],
})
export class RestrictedPageComponent implements OnInit {
  constructor(private msalService: MsalService) {}

  ngOnInit(): void {}

  getName(): string | undefined {
    const username = this.msalService.instance.getActiveAccount()?.username;
    console.log('username: ', username);
    return username;
  }
}
