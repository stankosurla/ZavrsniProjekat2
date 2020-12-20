import { AutentifikacijaService } from './../autentifikacija.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private autentifikacijaService: AutentifikacijaService) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.autentifikacijaService.registrujKorisnika(email, pass);
  }

}
