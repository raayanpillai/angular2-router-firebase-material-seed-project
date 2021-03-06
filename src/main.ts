import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// import the main component
import { AppComponent, environment } from './app/';

// angular 2 component router
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// http dependency for loading CDN stylesheets
import { HTTP_PROVIDERS } from '@angular/http';

// firebase dependency
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, // angular 2 component router global directives
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "<your-key>",
    authDomain: "<your-project-authdomain>",
    databaseURL: "<your-database-URL>",
    storageBucket: "<your-storage-bucket>",
  })
]);
