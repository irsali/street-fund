import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppNotificationService {

  constructor(private _snackbar: MatSnackBar) { }

  notifySuccess(message: string, action?: string) {
    this._snackbar.open(message, action || 'successully saved');
  }

  notifyBadRequest(message: string, action?: string) {
    this._snackbar.open(message, action || 'Incomplete or bad data. Please contact Admin');
  }

  notifyError(message: string, action?: string) {
    this._snackbar.open(message, action || 'Something went wrong. Please try again!');
  }

}
