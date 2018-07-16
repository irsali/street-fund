import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

// below operators to be available with Observable
import 'rxjs/add/operator/delay';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import 'rxjs/operators/catchError';
// import { map } from 'rxjs/operators/map';
import 'rxjs/operators/startWith';
import 'rxjs/operators/switchMap';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
