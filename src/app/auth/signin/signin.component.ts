import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      // Validators.pattern(/[a-zA-Z0-9]+$/g),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.signinForm.invalid) return;

    this.authService.signin(this.signinForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error, status }) => {
        if (!status) {
          this.signinForm.setErrors({
            noInternet: true,
          });
          return;
        }

        if (error.username || error.password) {
          this.signinForm.setErrors({
            invalidUorP: true,
          });
        }
      },
    });
  }
}
