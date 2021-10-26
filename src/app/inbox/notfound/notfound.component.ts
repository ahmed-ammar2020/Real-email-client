import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  constructor() {}

  ngOnInit(): void {}
}
