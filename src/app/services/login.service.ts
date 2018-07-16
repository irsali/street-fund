import { Injectable } from '@angular/core';
import { AppNotificationService, AppHttpService } from '@app/services';

@Injectable()
export class LoginService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  get(userEmail: string, password: string) {
    const response = this.http.get(`logins?userEmail=${userEmail}&password=${password}`);
    return response;
  }

}
