import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { IndexComponent } from './views/index/index.component';
import { ResultsComponent } from './views/results/results.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardsTableComponent } from './components/boards-table/boards-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    IndexComponent,
    ResultsComponent,
    BoardsTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, ReactiveFormsModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
