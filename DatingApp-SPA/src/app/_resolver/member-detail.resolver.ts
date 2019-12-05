import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_model/User';
import { UserService } from '../_Services/user.service';
import { AlertifyService } from '../_Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MemberDetailResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}
    resolve(rout: ActivatedRouteSnapshot): Observable<User> {
return this.userService.getUser(rout.params['id']).pipe(
    catchError(error => {
        this.alertify.error('problem resolving data');
        this.router.navigate(['/member']);
        return of(null);
    })
);
    }
}
