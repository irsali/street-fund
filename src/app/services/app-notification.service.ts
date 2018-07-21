import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppNotificationService {

  constructor(private _snackbar: MatSnackBar) { }

  notifyNotAllowed(message?: string, action?: string) {
    this._snackbar.open(message || 'Please contact admin to extend your role with App.', action || 'Not Authorize');
  }

  notifySuccess(message: string, action?: string) {
    this._snackbar.open(message, action || 'Successully saved!');
  }

  notifyBadRequest(message: string, action?: string) {
    this._snackbar.open(message, action || 'Validation error');
  }

  notifyLocalValidationError(message?: string, action?: string) {
    this._snackbar.open(message || 'Please check the form', action || 'Validation failed');
  }

  notifyError(message?: string, action?: string) {
    this._snackbar.open(message || 'Please try again', action || 'Error occurred');
  }

}
