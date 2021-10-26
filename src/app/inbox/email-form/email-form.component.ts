import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailResponse } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: EmailResponse;
  emailForm: FormGroup;
  @Output() submitEmail = new EventEmitter();

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    const { from, to, subject, text } = this.email;
    this.emailForm = new FormGroup({
      from: new FormControl({
        value: from,
        disabled: true,
      }),
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  submitForm() {
    if (this.emailForm.invalid) return;
    this.submitEmail.emit(this.emailForm.value);
  }
}
