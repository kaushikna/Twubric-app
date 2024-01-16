import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.css']
})
export class SortButtonsComponent implements OnInit {

  @Output() sortCriteriaSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSortCriteriaSelected(criteria: string) {

    this.sortCriteriaSelected.emit(criteria);

  }



}
