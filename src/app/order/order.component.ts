import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  methods: ["Credit Card", "PayPal", "Payment on Delivery"]

  /* optionsSelect: Array<any>; */

  constructor() { }

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'adress': new FormControl(null, Validators.required),
      'method': new FormControl('', Validators.required),
      'options': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }



}
