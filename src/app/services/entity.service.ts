import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { IEntityModel } from '@app/models';
import { Observable } from 'rxjs/Observable';
import { AppNotificationService } from './app-notification.service';

@Injectable()
export class EntityService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  put(form: any) {
    const response = this.http.put('entities', form);
    this.notificationService.notifySuccess('Person is saved successfully');
    return response;
  }

  getPage(page: number = 1, pageSize: number = 10, sort?: string, search?: string) {
    const response = this.http.getPage(`entities?_page=${page}&_limit=${pageSize}`);
    return response;
  }

  get(id: number) {
    const response = this.http.get(`entities/${id}`);
    return response;
  }

}
