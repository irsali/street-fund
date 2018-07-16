import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { AppNotificationService } from './app-notification.service';

@Injectable()
export class LoginService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  get(userEmail: string, password: string) {
    const response = this.http.get(`logins?userEmail=${userEmail}&password=${password}`);
    return response;
  }

}
