import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-file',
  templateUrl: './reg-file.component.html',
  styleUrls: ['./reg-file.component.css']
})
export class RegFileComponent implements OnInit {
registrationForm: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
