import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { AppNotificationService } from './app-notification.service';
import { ILoginModel } from '@app/models';

@Injectable()
export class LoginService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  get(model: ILoginModel) {
    const response = this.http.get(`logins?userEmail=${model.userEmail}&password=${model.password}`);
    return response;
  }

}
