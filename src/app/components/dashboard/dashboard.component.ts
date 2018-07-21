import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  balanceAmount: number;
  totalExpenses: number;
  totalCollection: number;
  totalPersons: number;

  constructor() { }

  ngOnInit() {
    this.totalPersons = 23;
    this.totalCollection = 4542;
    this.totalExpenses = 324;
    this.balanceAmount = this.totalCollection - this.totalExpenses;
  }

}
