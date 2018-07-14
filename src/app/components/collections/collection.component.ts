import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelMetadataService, AppNotificationService, CollectionService, EntityService } from '@app/services';
import { FormHelper } from '../../shared/helpers';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private metaService: ModelMetadataService,
    private service: CollectionService, private notificationService: AppNotificationService) { }

  ngOnInit() {
    this.form = FormHelper.toFormGroup(this.metaService.getEntityMeta());
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.put(this.form.value).subscribe((response) => {
        this.ngOnInit();
      });
    }
  }

}
