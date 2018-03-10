import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private jobs;

  constructor(public navCtrl: NavController,  public apiProvider: ApiProvider, public loadingCtrl: LoadingController) {
    this.jobs = [];
  }

  ionViewDidLoad() {
    this.fetchJobs();
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({ content: "Veuillez patienter..." });
    loading.present();
    this.apiProvider.getJobs()
    .then(jobs => {
      this.jobs = jobs;
      loading.dismiss();
    }).catch(error => {
      console.error(error)
    });
  }

}
