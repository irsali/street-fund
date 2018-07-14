import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModelMetadataService } from '@app/services';
import { FormHelper } from '../../shared/helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private metaService: ModelMetadataService) { }

  ngOnInit() {
    this.form = FormHelper.toFormGroup(this.metaService.getLoginMeta());
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['dashboard']);
    }
  }
}
