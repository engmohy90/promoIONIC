import { Storage } from '@ionic/storage';
import { Contacts } from '@ionic-native/contacts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {
  constructor(public http: HttpClient,
  public contacts:Contacts, private storage: Storage,) {
    console.log('Hello ContactsProvider Provider');
    this.getcontacts();
  }
 getcontacts ():any {
  this.storage.get('contacts').then(val=>{
    return val
  })
    // alert('initialze Items');
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true,hasPhoneNumber:true}).then((contacts) => {
      this.storage.set('contacts',contacts);
    }, err => {
      return(err);
    });
  }
 
}
