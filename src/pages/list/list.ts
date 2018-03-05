import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private jobs;

  constructor(public navCtrl: NavController,  public httpClient: HttpClient) {
    this.jobs = [];
    this.httpClient.get('https://mobile-api-jobs.herokuapp.com/api/jobs').subscribe(data => this.jobs = data);
  }

}
