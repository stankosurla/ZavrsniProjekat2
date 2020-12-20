import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZavrsniProjekat2';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAg3BtTa0PGOA2ejlZusMsjVcRdeEKd_To",
      authDomain: "zavrsni2-4f3c1.firebaseapp.com"
    });
  }

}
