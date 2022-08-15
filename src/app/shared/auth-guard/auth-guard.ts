import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserRole } from '../models/enums';


@Injectable()
export class RouteGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | import('@angular/router').UrlTree |
        import('rxjs').Observable<boolean | import('@angular/router').UrlTree> |
        Promise<boolean | import('@angular/router').UrlTree> {
        const role: UserRole = route.data.role;
        {
            let id = window.localStorage.getItem("id");
            let user: any;
            if (id) {
                user = JSON.parse(window.atob(id));
            }
            if (user != null && user != undefined) {

                if (user.role == 0 || user.role == 1 || user.role == 2) {
                    return true;
                }
                if (user.role === 0){
                    this.router.navigateByUrl('/admin');
                }
                else if (user.role === 1){
                    this.router.navigateByUrl('/recruiter');
                }
                else if (user.role === 2){
                    this.router.navigateByUrl('/referer');
                }
                return false;
            }
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}