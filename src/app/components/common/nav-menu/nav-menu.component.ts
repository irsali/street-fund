import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavMenuComponent implements OnInit {

  @ViewChild('sidenav') sidenave: MatSidenav;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSideNavClick(navigateTo: string) {
    this.router.navigate([navigateTo]);
    this.sidenave.close();
  }

  logout() {

  }

}
