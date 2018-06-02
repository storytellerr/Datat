import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements ngAfterViewInit {
//@ViewChild("tpl") tpl: TemplateRef<any>;

  constructor() {
  }


ngAfterViewInit() {

//this.tpl.width  = 800;
//this.tpl.height = 600;
  }
}
