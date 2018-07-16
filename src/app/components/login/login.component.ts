import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModelMetadataService, LoginService, AppNotificationService } from '@app/services';
import { FormHelper } from '../../shared/helpers';
import { Router } from '@angular/router';
import { IEntityModel, ILoginModel } from '@app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private metaService: ModelMetadataService, private service: LoginService,
    private notificationService: AppNotificationService) { }

  ngOnInit() {
    this.form = FormHelper.toFormGroup(this.metaService.getLoginMeta());
  }

  onSubmit() {
    if (this.form.valid) {
      const model = <ILoginModel>this.form.value;
      this.service.get(model.userEmail, model.password).subscribe((response: Array<ILoginModel>) => {
        if (response && response.length === 1) {
          const role = response[0].role;
          this.router.navigate(['dashboard']);
        } else {
          this.notificationService.notifyBadRequest('User email or password is incorrect');
        }
      });
    }
  }
}
