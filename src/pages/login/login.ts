import {Component, OnInit} from '@angular/core';
import {LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {MainPage} from "../main/main";

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
              public menu: MenuController,) {


  }

  ngOnInit() {
  }

  login(form: NgForm) {

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...',
      duration: 300

    });
    // check from storage auth
    loading.present().then(() => {
      this.navCtrl.setRoot(MainPage, {}, {
        animate: true,
        direction: 'forward'
      });

    })
  }

}
