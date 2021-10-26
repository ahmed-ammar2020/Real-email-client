import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          // Validators.pattern(/[a-zA-Z0-9]+$/g),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.mathcPassword.validate],
    }
  );

  constructor(
    private mathcPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.signupForm.invalid) return;

    this.authService.signup(this.signupForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        if (!err.status) {
          this.signupForm.setErrors({
            noInternet: true,
          });
        } else {
          this.signupForm.setErrors({
            unknownError: true,
          });
        }
      },
    });
  }
}
