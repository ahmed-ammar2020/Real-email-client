import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailResponse } from './email';
import { tap } from 'rxjs/operators';

interface EmailsResponse {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  baseUrl = 'https://api.angular-email.com';
  from: string;
  subject: string;

  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<EmailsResponse[]>(`${this.baseUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<EmailResponse>(`${this.baseUrl}/emails/${id}`).pipe(
      tap(({ from, subject }) => {
        this.from = from;
        this.subject = subject;
      })
    );
  }

  sendEmail(data: EmailResponse) {
    return this.http.post(`${this.baseUrl}/emails`, data);
  }
}
