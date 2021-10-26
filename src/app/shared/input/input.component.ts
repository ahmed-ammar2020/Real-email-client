import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: any;
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() controlType: string = 'input';
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
