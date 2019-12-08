import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_model/User';
import { UserService } from '../_Services/user.service';
import { AlertifyService } from '../_Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_Services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService,
                private authService: AuthService) {}
    resolve(rout: ActivatedRouteSnapshot): Observable<User> {
return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
    catchError(error => {
        this.alertify.error('problem resolving your data');
        this.router.navigate(['/members']);
        return of(null);
    })
);
    }
}
