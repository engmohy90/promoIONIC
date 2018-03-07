import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  getUser(user: User): Observable<User> {
    if (user !== null && user.username.toLowerCase() == "mohy" && user.password.toLowerCase() == "mohy") {

      return Observable.of(user);// TODO : return the response
      // } else {
      //    throw new Error('Value expected!');
    }
  }
}
