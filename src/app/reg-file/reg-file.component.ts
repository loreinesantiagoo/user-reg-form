import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reg-file',
  templateUrl: './reg-file.component.html',
  styleUrls: ['./reg-file.component.css']
})
export class RegFileComponent implements OnInit {
@Input() registrationForm: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
