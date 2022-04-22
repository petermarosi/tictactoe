import {AfterViewInit, Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BoardsTableDataSource, BoardsTableItem } from './boards-table-datasource';
import { HttpClient } from "@angular/common/http";

/* eslint-disable */

@Component({
  selector: 'angular-boards-table',
  templateUrl: './boards-table.component.html',
  styleUrls: ['./boards-table.component.css']
})
export class BoardsTableComponent implements AfterViewInit {
  readonly ROOT_URL = 'http://localhost:5000';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BoardsTableItem>;
  dataSource: BoardsTableDataSource;
  @Input() data = [];
  @Output() messageEvent = new EventEmitter<number>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'board', 'delete'];

  constructor(private http: HttpClient) {
    this.dataSource = new BoardsTableDataSource();
  }

  ngAfterViewInit(): void {
    console.log(this.data)
    this.dataSource = new BoardsTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClick(row: any) {
    this.messageEvent.emit(row.id - 1)
  }

  onDeleteClick(row: any) {
    this.deleteBoard(row.id)
  }

  deleteBoard(id: number) {
    this.http.delete<any>(this.ROOT_URL + '/boards/' + id).subscribe(data => {
      console.log(data);
    });
  }
}
