import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { AppNotificationService } from './app-notification.service';

@Injectable()
export class DashboardService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  getEntitiesCount() {
    const response = this.http.getPage(`entities?_page=1&_limit=1`);
    return response;
  }

  getCollections() {
    const response = this.http.get(`collections`);
    return response;
  }

  getExpenses() {
    const response = this.http.get(`expenses`);
    return response;
  }

}
