import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionService, AppNotificationService } from '@app/services';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router, private notificationService: AppNotificationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isAllowed = false;
    if (!next.data.allowedRoles) {
      isAllowed = true;
    } else if (next.data.allowedRoles.indexOf(this.sessionService.role) > -1) {
      isAllowed = true;
    }

    if (!isAllowed) {
      this.notificationService.notifyNotAllowed();
    }

    return isAllowed;
  }
}
