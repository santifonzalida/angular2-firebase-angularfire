import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public Auth: AngularFireAuth) {
      this.user = Auth.authState;
   }

  ngOnInit() {
  }

  login() {
    this.Auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.Auth.auth.signOut();
  }


}
