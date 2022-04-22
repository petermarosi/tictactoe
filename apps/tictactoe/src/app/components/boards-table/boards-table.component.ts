import { AfterViewInit, Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BoardsTableDataSource, BoardsTableItem } from './boards-table-datasource';

@Component({
  selector: 'angular-boards-table',
  templateUrl: './boards-table.component.html',
  styleUrls: ['./boards-table.component.css']
})
export class BoardsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BoardsTableItem>;
  dataSource: BoardsTableDataSource;
  @Output() messageEvent = new EventEmitter<number>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'board'];

  constructor() {
    this.dataSource = new BoardsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClick(row: any) {
    this.messageEvent.emit(row.id - 1)
  }
}
