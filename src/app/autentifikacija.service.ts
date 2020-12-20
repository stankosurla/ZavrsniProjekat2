import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {

  token: string;

  constructor(private router: Router) {

  }

  prijavljen() {
    return this.token != null;
  }

  odjaviSe() {
    firebase.auth().signOut();
    this.token = null;
  }

  registrujKorisnika(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => console.log(response)
      )
      .catch(
        (error) => console.log(error)
      )
  }

  prijaviKorisnika(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (response) => console.log(response)
            )
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }

  vratiToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      )
    return this.token;
  }

}
