import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { AppNotificationService } from './app-notification.service';

@Injectable()
export class CollectionService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  put(form: any) {
    const response = this.http.put('collections', form);
    this.notificationService.notifySuccess('Collection is saved successfully');
    return response;
  }

  getPage(page: number = 1, pageSize: number = 10, sortField?: string, sortOrder: string = 'asc', search?: string) {
    const response = this.http.getPage(`collections?_page=${page}&_limit=${pageSize}&_sort=${sortField}&_order=${sortOrder}`);
    return response;
  }

  get(id: number) {
    const response = this.http.get(`collections/${id}`);
    return response;
  }

}
