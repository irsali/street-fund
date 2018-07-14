import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule,
  MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
  MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { AppInputComponent } from './controls/app-input/app-input.component';
import { AppSelectComponent } from './controls/app-select/app-select.component';
import { AppTableComponent } from './controls/app-table/app-table.component';
import { AppToggleComponent } from './controls/app-toggle/app-toggle.component';
import { AppCheckboxComponent } from './controls/app-checkbox/app-checkbox.component';
import { AppTypeaheadComponent } from './controls/app-typeahead/app-typeahead.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule,
    MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
    MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
    MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule,
    MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
    MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
    MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,

    AppInputComponent, AppSelectComponent, AppTableComponent, AppToggleComponent, AppCheckboxComponent, AppTypeaheadComponent
  ],
  declarations: [AppInputComponent, AppSelectComponent, AppTableComponent, AppToggleComponent, AppCheckboxComponent, AppTypeaheadComponent]
})
export class SharedModule {
}
