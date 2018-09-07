import { Component, Input } from '@angular/core';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'user-reg-form';

  @Input() registrationForm;

  cloneResult: any;
  }
