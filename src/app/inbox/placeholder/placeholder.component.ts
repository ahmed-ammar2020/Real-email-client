import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
