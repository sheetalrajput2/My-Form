import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    name: '',
    email: '',
    password: ''
  };

  submitted = false;

  submitForm() {
    this.submitted = true;
    console.log("Form Data:", this.user);
  }

}
