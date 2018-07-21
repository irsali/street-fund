import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { SessionService } from '@app/services';
import { RoleEnum } from '../../../models/enums';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavMenuComponent implements OnInit {

  @ViewChild('sidenav') sidenave: MatSidenav;
  isLogin: boolean;
  isAdmin: boolean;
  isMember: boolean;

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    if (this.sessionService.role) {
      this.isLogin = true;
      this.isAdmin = this.sessionService.role === RoleEnum.admin ? true : false;
      this.isMember = this.sessionService.role === RoleEnum.member ? true : false;
    }
  }

  onSideNavClick(navigateTo: string) {
    this.router.navigate([navigateTo]);
    this.sidenave.close();
  }

  logout() {
    this.sessionService.signOut();
    this.router.navigate(['/login']);
  }

}
