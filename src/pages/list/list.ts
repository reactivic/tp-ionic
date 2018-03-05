import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private jobs;

  constructor(public navCtrl: NavController,  public httpClient: HttpClient, public loadingCtrl: LoadingController) {
    this.jobs = [];
  }

  ionViewDidLoad() {
    this.fetchJobs();
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({
      content: "Veuillez patienter...",
    });
    loading.present();
    this.httpClient.get('https://mobile-api-jobs.herokuapp.com/api/jobs').subscribe(data => {
      loading.dismiss();
      this.jobs = data
    });
  }

}
