import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModelMetadataService, LoginService, AppNotificationService, SessionService } from '@app/services';
import { FormHelper } from '../../shared/helpers';
import { Router } from '@angular/router';
import { IEntityModel, ILoginModel } from '@app/models';
import { FormBaseComponent } from '../../shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private metaService: ModelMetadataService, private service: LoginService,
    protected notificationService: AppNotificationService, private sessionService: SessionService) {
    super(notificationService);
  }

  ngOnInit() {
    this.form = FormHelper.toFormGroup(this.metaService.getLoginMeta());
  }

  onSubmit() {

    this.submitProcessStart();

    if (this.form.valid) {

      this.service.get(this.form.value).subscribe(
        this.onResponse.bind(this),
        this.notifyErrorFromApi.bind(this),
        this.submitProcessComplete.bind(this));

    } else {
      this.notifyValidationError();
    }

  }

  onResponse(response: Array<ILoginModel>) {
    if (response && response.length === 1) {
      const role = response[0].role;
      this.sessionService.signIn(role);
      this.router.navigate(['dashboard']);
    } else {
      this.notificationService.notifyBadRequest('User email or password is incorrect');
    }
  }

}
