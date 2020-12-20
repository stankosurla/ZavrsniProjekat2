import { AutentifikacijaService } from './../autentifikacija.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autentifikacijaService: AutentifikacijaService) { }

  ngOnInit(): void {
  }



  logIn(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.autentifikacijaService.prijaviKorisnika(email, pass);
  }

  onClick() {
    console.log("Uspesno ste ulogovani");
  }

}
