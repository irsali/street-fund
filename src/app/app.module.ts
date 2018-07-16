import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import {
  ModelMetadataService, AppNotificationService, AppHttpService, EntityService,
  LoginService, CollectionService, ExpenseService, SessionService
} from '@app/services';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityComponent } from './components/entities/entity.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionComponent } from './components/collections/collection.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expenses/expense.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavMenuComponent } from './components/common/nav-menu/nav-menu.component';


const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'collections/:id', component: CollectionComponent },
  { path: 'entities', component: EntitiesComponent },
  { path: 'entities/:id', component: EntityComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'expenses/:id', component: ExpenseComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntitiesComponent,
    EntityComponent,
    CollectionsComponent,
    CollectionComponent,
    ExpensesComponent,
    ExpenseComponent,
    DashboardComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-IN'
    },
    ModelMetadataService,
    AppNotificationService,
    AppHttpService,
    SessionService,
    EntityService,
    LoginService,
    CollectionService,
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
