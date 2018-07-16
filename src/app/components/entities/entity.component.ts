import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelMetadataService, EntityService, AppNotificationService } from '@app/services';
import { FormHelper } from '../../shared/helpers';
import { isNumber } from 'util';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private metaService: ModelMetadataService,
    private service: EntityService, private notificationService: AppNotificationService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      const id = x.id;
      if (Number(id)) {
        this.service.get(Number(id)).subscribe(response => {
          const model = response;
          this.form = FormHelper.toFormGroup(this.metaService.getEntityMeta(), model);
        });
      } else {
        this.form = FormHelper.toFormGroup(this.metaService.getEntityMeta());
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.put(this.form.value).subscribe((response) => {
        this.ngOnInit();
      });
    }
  }

}
