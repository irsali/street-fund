import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  private _role: string;

  get role() {
    if (!this._role) {
      this._role = localStorage.getItem('role');
    }
    return this._role;
  }
  set role(role: string) {
    this._role = role;
    localStorage.setItem('role', this._role);
  }


}
