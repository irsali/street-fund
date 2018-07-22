import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelMetadataService, AppNotificationService, ExpenseService, EntityService } from '@app/services';
import { FormHelper } from '../../shared/helpers';
import { IEntityModel, IExpenseModel } from '@app/models';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  id: any;
  entityName: string;
  entityOptions: any;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private metaService: ModelMetadataService,
    private service: ExpenseService, private entityService: EntityService, private notificationService: AppNotificationService) { }

  ngOnInit() {
    this.populateEntityAutoComplete('');
    this.route.params.subscribe(x => {
      const id = x.id;
      if (Number(id)) {
        this.id = id;
        this.service.get(id).subscribe((response: IExpenseModel) => {
          this.form = FormHelper.toFormGroup(this.metaService.getCollectionMeta(), response);
          this.entityService.get(response.entityId).subscribe((res: IEntityModel) => {
            this.entityName = res.middleName ?
              `${res.firstName} ${res.middleName} ${res.lastName}` : `${res.firstName} ${res.lastName}`;
          });
        });
      } else {
        const model = <IExpenseModel>{ date: new Date() };
        this.form = FormHelper.toFormGroup(this.metaService.getCollectionMeta(), model);
      }
    });
  }

  populateEntityAutoComplete(searchWord: string) {
    this.entityService.getEntityAutoComplete(searchWord).subscribe((response: Array<IEntityModel>) => {
      console.log(response);
      const entityOptions = response.map(x => ({
        value: x.id,
        text: (x.middleName ? `${x.firstName} ${x.middleName} ${x.lastName}` : `${x.firstName} ${x.lastName}`)
      }));
      this.entityOptions = entityOptions;
      console.log(this.entityOptions);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.put(this.form.value).subscribe((response) => {
        if (response) {
          this.notificationService.notifySuccess('Expense is saved successfully');
          this.ngOnInit();
        }
      });
    }
  }

}
