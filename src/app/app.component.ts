import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  showNavMenu = true;

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        if (event.url === '/login') {
          this.showNavMenu = false;
        } else {
          this.showNavMenu = true;
        }
      }
    });
  }
}

