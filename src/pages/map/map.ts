import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  lat = 51.678418;
  lng = 7.809007;

  private jobs;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public loadingCtrl: LoadingController) {
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
      this.jobs = data.map(job => (
        {
          ...job,
          latitude: Number(job.latitude),
          longitude: Number(job.longitude),
        }
      ))
    });
  }

}
