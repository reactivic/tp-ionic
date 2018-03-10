import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';

interface Job {
  latitude: String;
	longitude: String;
	name: String;
}

type Response = Job[];

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
    public httpClient: HttpClient,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.fetchJobs();
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 3000,
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
    this.httpClient.get('https://mobile-api-jobs.herokuapp.com/api/jobs').subscribe((data: Response) => {
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
