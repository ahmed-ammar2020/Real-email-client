import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

interface UniqueUsernameResponse {
  available: true;
}

interface UserSignup {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface UserSignin {
  username: string;
  password: string;
}

interface signUpResponse {
  username: string;
}

interface signInResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(null);
  username: string;

  constructor(private http: HttpClient) {}

  IsUsernameUnique(username: string) {
    return this.http.post<UniqueUsernameResponse>(
      `${this.baseUrl}/auth/username`,
      {
        username,
      }
    );
  }

  signup(credentials: UserSignup) {
    return this.http
      .post<signUpResponse>(`${this.baseUrl}/auth/signup`, credentials)
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  // just checking
  checkSignedin() {
    return this.http
      .get<{ authenticated: boolean; username: string }>(
        `${this.baseUrl}/auth/signedin`
      )
      .pipe(
        tap(({ authenticated, username }) => {
          this.signedin$.next(authenticated);
          this.username = username;
        })
      );
  }

  signout() {
    return this.http.post(`${this.baseUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(credential: UserSignin) {
    return this.http
      .post<signInResponse>(`${this.baseUrl}/auth/signin`, credential)
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }
}
