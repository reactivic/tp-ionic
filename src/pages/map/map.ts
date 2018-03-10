import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  lat = 51.678418;
  lng = 7.809007;

  private jobs;

  constructor(
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.fetchJobs();
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    }).then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({
      content: "Veuillez patienter...",
    });
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
