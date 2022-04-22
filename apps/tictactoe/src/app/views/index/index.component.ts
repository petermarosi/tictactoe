import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

/* eslint-disable */

@Component({
  selector: 'angular-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  readonly ROOT_URL = 'http://localhost:5000';
  saveForm = this.formBuilder.group({
    name: '',
  });
  board: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.saveForm.value.name === '' || this.board === '') {
      return;
    }
    let save = this.saveForm.value;
    save.board = this.board;

    this.uploadSave(save);

    this.saveForm.reset();
  }

  uploadSave(save: any): void {
    this.http.post<any>(this.ROOT_URL + '/boards', save).subscribe(data => {
      console.log(data)
    })
  }

  receiveMessage($event: any) {
    this.board = $event
  }
}
