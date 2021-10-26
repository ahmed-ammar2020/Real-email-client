import { Component, OnInit } from '@angular/core';
import { EmailResponse } from '../email';
import { AuthService } from './../../auth/auth.service';
import { EmailService } from './../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  modalOpen = false;
  email: EmailResponse = {
    id: '',
    from: `${this.authService.username}@angular-email.com`,
    to: '',
    subject: '',
    text: '',
    html: '',
  };

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}

  dismissModal() {
    this.modalOpen = !this.modalOpen;
  }

  submitEmail(email: EmailResponse) {
    return this.emailService.sendEmail(email).subscribe(() => {
      this.modalOpen = false;
    });
  }
}
