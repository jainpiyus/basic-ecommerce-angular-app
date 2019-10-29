import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading = false;
  progressEnable = new BehaviorSubject(this.loading);
  constructor() { }
}
