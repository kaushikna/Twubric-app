import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  @Output() dateRangeSelected = new EventEmitter<any>();
  fromDate!: Date;
  toDate!: Date;
  constructor() { }

  ngOnInit(): void {
  }


  onDateRangeSelected() {
    const dateRange = {
      from: this.fromDate,
      to: this.toDate
    };
    console.log("daterane",dateRange)
    this.dateRangeSelected.emit(dateRange);
  }
}
