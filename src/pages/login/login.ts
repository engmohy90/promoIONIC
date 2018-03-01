import {Component, OnInit} from '@angular/core';
import {LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {MainPage} from "../main/main";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {


  registerCredentials = {username: '', password: '',};
  userID


  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public menu: MenuController,
              private storage: Storage,) {


  }

  ngOnInit() {
  }

  login(form: NgForm) {

    // Or to get a key/value pair
    this.storage.get('auth').then((val) => {
      if (val == 'yes') {
        this.navCtrl.setRoot(MainPage, {}, {
          animate: true,
          direction: 'forward'
        });
      }
    });
    if (this.registerCredentials.username == "mohy" && this.registerCredentials.password == "mohy") {
      this.registerCredentials.username == "mohy"
      this.navCtrl.setRoot(MainPage, {}, {
        animate: true,
        direction: 'forward'
      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'login error',
        duration: 3000
      });
      toast.present();

    }
  }

// let loading = this.loadingCtrl.create({
//   spinner: 'bubbles',
//   content: 'Loading Please Wait...',
//   duration: 300
//
// });

// check from storage auth
// loading.present().then(() => {
//   this.navCtrl.setRoot(MainPage, {}, {
//     animate: true,
//     direction: 'forward'
//   });
//
// })

}

