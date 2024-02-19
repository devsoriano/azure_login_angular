// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  azure: {
    clientId: '57b38bce-f717-427b-a727-88ee6baf49a3',
    authority:
      'https://login.microsoftonline.com/6a707f34-31cd-4e9c-bf98-0bf7326860c9',
    redirectUri: 'http://localhost:4200',
    clientSecret: '3d22c760-9661-4f1e-9263-44e20e96f373',
    tenantId: '6a707f34-31cd-4e9c-bf98-0bf7326860c9',
    postLogoutRedirectUri: ' http://localhost:4200/login',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
