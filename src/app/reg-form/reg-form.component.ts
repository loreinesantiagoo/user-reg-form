import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { equalValueValidator } from './equal-value-validator';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  registrationForm = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl('') ,
    address: new FormControl(''),
    country: new FormControl(''),
    contact: new FormControl('')
  });


  constructor(private userSvc: UserService, private fb: FormBuilder) { }



  OnInit() {
    this.buildForm();

  }
  buildForm() {
    this.registrationForm = this.fb.group({
      'username': ['', [
        Validators.required
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.minLength(8)
      ]
      ],
      'confirmPassword': ['', [
        Validators.required,
        Validators.minLength(8)
      ]
      ]
    },
      { validator: equalValueValidator('password', 'confirmPassword') }  // key is to validate on the form group
    );
  }

  register() {
    // do somthing
  }
  registerMe(registrationForm: NgForm) {
    console.log('form: ', this.registrationForm.value);
    this.userSvc
      .addUser(registrationForm.value)
      .subscribe((data) => {
        console.log(data);
      });
    registrationForm.resetForm();
  }

  checkEmailFromUS(value) {
    return false;
  }
}
