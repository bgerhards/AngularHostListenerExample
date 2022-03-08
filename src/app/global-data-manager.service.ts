import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataManagerService {
  clicks: number = 0;
  keypresses: number = 0;

  constructor() { }
}
