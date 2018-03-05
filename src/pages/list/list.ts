import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private jobs;

  constructor(public navCtrl: NavController) {
    this.jobs = [
      'Job 1',
      'Job 2',
      'Job 3',
      'Job 4',
    ]
  }

}
