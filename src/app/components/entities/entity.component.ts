import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelMetadataService, EntityService, AppNotificationService } from '@app/services';
import { FormHelper } from '../../shared/helpers';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private metaService: ModelMetadataService,
    private service: EntityService, private notificationService: AppNotificationService) { }

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
