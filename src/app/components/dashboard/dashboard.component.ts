import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@app/services';
import { IEntityModel, ICollectionModel, IExpenseModel } from '@app/models';
import { forkJoin } from 'rxjs/observable/forkJoin';

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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.totalPersons = 23;
    this.totalCollection = 4542;
    this.totalExpenses = 324;
    this.balanceAmount = this.totalCollection - this.totalExpenses;

    this.dashboardService.getEntitiesCount().subscribe((response: any) => {
      this.totalPersons = response.total_count;
    });

    forkJoin(this.dashboardService.getCollections(), this.dashboardService.getExpenses())
      .subscribe((responses: Array<any>) => {
        const collections: Array<ICollectionModel> = responses[0];
        const expenses: Array<IExpenseModel> = responses[1];

        // collection
        let sum = 0;
        collections.forEach(value => {
          sum += Number(value.amount);
        });
        this.totalCollection = sum;

        // expense
        let sumt = 0;
        expenses.forEach(value => {
          sumt += Number(value.amount);
        });
        this.totalExpenses = sumt;

        this.balanceAmount = this.totalCollection - this.totalExpenses;

      });

  }

}
