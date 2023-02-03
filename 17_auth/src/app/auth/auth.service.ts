import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbVtODAMhsO-yi0ou-oJnow5_8ayyoqjI',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((err) => {
          let errorMessage = 'An unknown error occurred.';
          if (!err.error || !err.error.error) {
            return throwError(errorMessage);
          }

          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already.';
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbVtODAMhsO-yi0ou-oJnow5_8ayyoqjI',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
