import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

// ...
// Example of user credentials to match against incoming credentials.
const mockUsername = 'me@domain.com';
const password = 'password';

// list of friends to return when the route /api/friends is invoked.
const friends = ['alice', 'bob'];

// the hardcoded JWT access token you created @ jwt.io.
const token = '';

// ...
// Use these methods in the implementation of the intercept method below to return either a success or failure response.
const makeError = (status, error) => {
    return Observable.throw(
        new HttpErrorResponse({
            status,
            error
        })
    );
};

const makeResponse = body => {
    return of(
        new HttpResponse({
            status: 200,
            body: [{
                id: 1,
                name: 'test',
            }]
        })
    );
};

// ...

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        const {
            body,       // object
            headers,    // object
            method,     // string
            url,        // string
        } = req;

        /*  return; */
        if (url.endsWith('/login')) {
            if (body.username === 'test@test.com' && body.password === '123456') {
                return makeResponse({

                });
            } else {
                return makeError(500, {

                });
            }
        }
        /*         if (url.contains('/friends') {

                }) */

        /*   console.error('intercepted', method, url);
          return Observable.of(new HttpResponse({
              status: 200,
              body: [{
                  id: 1,
                  name: 'test',
              }] // implement logic for handling API requests, as defined in the exercise instructions. */
    }
}
