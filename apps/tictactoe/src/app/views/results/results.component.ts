import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* eslint-disable */

@Component({
  selector: 'angular-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  readonly ROOT_URL = 'http://localhost:5000';

  boards: any;
  activeIndex: number = -1;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards() {
    this.http.get<any>(this.ROOT_URL + '/boards').subscribe(data => {
      console.log(data)
      this.boards = data;
    });
  }

  receiveMessage($event: any) {
    this.activeIndex = $event
  }
}
