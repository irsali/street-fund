import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { AppNotificationService } from './app-notification.service';

@Injectable()
export class CollectionService {

  constructor(private http: AppHttpService, private notificationService: AppNotificationService) { }

  put(form: any) {
    const response = this.http.put('collections', form);
    this.notificationService.notifySuccess('Person is saved successfully');
    return response;
  }

  getPage(page: number = 1, pageSize: number = 10, sort?: string, search?: string) {
    const response = this.http.getPage(`collections?_page=${page}&_limit=${pageSize}`);
    return response;
  }

  get(id: number) {
    const response = this.http.get(`collections/${id}`);
    return response;
  }
