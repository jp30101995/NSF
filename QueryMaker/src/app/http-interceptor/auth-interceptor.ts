import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { LoginResponse } from '../login/login';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();
     // localStorage.getItem('authToken');
    debugger;
    //  .subscribe(
    //     (data: LoginResponse) => {
    //         console.log(data['Message']);
    //       // return localStorage.setItem('authToken', data['Message']);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken, 'Content-Type': 'application/json' } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
