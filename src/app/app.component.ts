import { Component } from '@angular/core';
import moment from 'moment';
import isString from 'lodash-es/isString';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = isString(moment().toISOString());
  title = 'ng-with-jest';
}
