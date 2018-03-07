import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Storage} from '@ionic/storage';
import {AuthProvider} from "../../providers/auth/auth";
import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {


  registerCredentials: User = {
    username: "",
    password: ""
  }

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public menu: MenuController,
              private storage: Storage,
              public _auth: AuthProvider) {


  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Or to get a key/value pair
    this.storage.get('user').then((user) => {
      if (user != null && user.username !== null) {
        this.navCtrl.setRoot('BrandsPage', {}, {
          animate: true,
          direction: 'forward'
        });
      }
    });
  }

  login(form: NgForm) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...',

    });
    loading.present()
    this._auth.getUser(this.registerCredentials).subscribe((data) => {
      loading.dismiss()
      this.storage.set('user', this.registerCredentials);
      // this.storage.set('masterkey', data.key);
      this.navCtrl.setRoot('BrandsPage', {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      loading.dismiss()

      let toast = this.toastCtrl.create({
        message: 'login error',
        duration: 3000
      });
      toast.present();
    })


  }
}

