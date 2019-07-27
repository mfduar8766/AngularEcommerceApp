import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public serarchQuery: string = '';
  constructor() {}

  ngOnInit() {}

  getSearchQuery(searchQuery: string) {
    this.serarchQuery = searchQuery;
  }
}
