import { Component, OnInit } from '@angular/core';
import { EmailResponse } from '../email';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  modalOpen = false;
  email: EmailResponse = {
    id: '',
    from: `${this.authService.username}@angular-email.com`,
    to: `${this.emailService.from}`,
    subject: `${this.emailService.subject}`,
    html: '',
    text: '',
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
    this.emailService.sendEmail(email).subscribe(() => {
      this.modalOpen = false;
    });
  }
}
