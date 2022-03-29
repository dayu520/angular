import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import{NzSiderComponent} from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
}
