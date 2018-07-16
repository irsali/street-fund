import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-typeahead',
  templateUrl: './app-typeahead.component.html',
  styleUrls: ['./app-typeahead.component.scss']
})
export class AppTypeaheadComponent implements OnInit {
  @Input() form: AbstractControl;
  @Input() name: string;
  @Input() label: string;
  @Input() type: string;
  @Input() showInputValidationMessages: boolean;
  @Input() tooltiptext: string;
  @Input() icon: string;
  @Input() isDisabled: boolean;
  @Input() floatLabel: FloatLabelType;
  @Input() options: any;
  @Input() viewValue: string;
  control: AbstractControl;
  isRequired: boolean;
  private searchUpdated = new Subject();
  @Output() public debounceKeyup = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    if (!this.viewValue) {
      this.viewValue = '';
    }

    this.control = this.form.get(this.name);
    if (this.control && this.control.validator) {
      const validator = this.control.validator(new FormControl());
      this.isRequired = (validator && validator.required) ? true : false;
    }

    // Default float type Auto
    if (this.floatLabel) {
      this.floatLabel = 'auto';
    }

    // Autocomplete
    this.searchUpdated.debounceTime(100).distinctUntilChanged().subscribe((x: string) => { console.log(x); this.debounceKeyup.emit(x); });
  }

  onKeyup(search: string) {
    this.control.setValue(null);
    this.searchUpdated.next(search);

  }

  onSelection(option) {
    this.control.setValue(option.value);
  }

}

