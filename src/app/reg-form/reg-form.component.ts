import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from './user-interface';



@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
public user: User;

registrationForm = new FormGroup ({
    'name': new FormControl(''),
    'email': new FormControl(''),
    'password': new FormControl(''),
    'gender': new FormControl(''),
    'dob': new FormControl('') ,
    'address': new FormControl(''),
    'country': new FormControl(''),
    'contact': new FormControl('')
  });


  constructor(private userSvc: UserService, private router: Router) { }



  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      // confirmPassword: '',
      gender: '',
      dob: '',
      address: '',
      country: '',
      contact: 0
    };
  }

  registerMe(registrationForm: NgForm) {
    console.log('form: ', this.registrationForm.value);
    this.userSvc
      .getUser(registrationForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.registerMe.push(registrationForm);
      });
    registrationForm.resetForm();
  }

  onSelect(value) {
    return value;
  }
}
