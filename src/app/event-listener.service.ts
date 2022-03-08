import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventListenerService {
  private userActivityTimeout: number = 0;
  private userInactive: Subject<any> = new Subject();

  constructor() {
    console.log('hello');
    this.setTimeout();
    this.userInactive.subscribe(() =>
      console.log('user has been inactive for 3s')
    );
  }

  private setTimeout() {
    this.userActivityTimeout = setTimeout(
      () => this.userInactive.next(undefined),
      3000
    );
  }

  userActivity() {
    console.warn('We have an acti');
    clearTimeout(this.userActivityTimeout);
    this.setTimeout();
  }
}
