import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { SortButtonsComponent } from '../sort-buttons/sort-buttons.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserListComponent,
    DateFilterComponent,
    SortButtonsComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserListModule { }
