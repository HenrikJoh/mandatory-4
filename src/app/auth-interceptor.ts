import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

// ...
// Example of user credentials to match against incoming credentials.
const mockUsername = 'me@domain.com';
const password = 'password';

// list of friends to return when the route /api/friends is invoked.
const mockfriends = ['alice', 'bob'];

// the hardcoded JWT access token you created @ jwt.io.
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIn0.M0OqGt2xzDrDhRlw8tDcjMJjBZWFIMx1mXyPini3RAc';

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
            body: body
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

        if (url.endsWith('/login')) {
            if (body.username === '1' && body.password === '1') {
                return makeResponse({
                    token: token,
                });
            } else {
                return makeError(401, {

                });
            }
        } else if (url.endsWith('/friends')) {
            if (headers.has('Authorization')) {
                if (headers.get('Authorization') === `Bearer ${token}`) {
                    return makeResponse({
                        friends: mockfriends,
                    });
                } else {
                    return makeError(401, {});
                }
            } else {
                return makeError(401, {});
            }
        } else {
            return makeError(500, {});
        }
    }
}
