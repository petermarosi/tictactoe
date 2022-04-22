import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';

/* eslint-disable */

@Component({
  selector: 'angular-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  /*saveForm = this.formBuilder.group({
    name: '',
  });*/
  board: string = '';

  constructor(/*private formBuilder: FormBuilder*/) {}

  ngOnInit(): void {}

  /*uploadSave(): void {
    if (this.saveForm.value === '') {
      return;
    }
    console.log()
    this.saveForm.reset();
  }*/

  receiveMessage($event: any) {
    this.board = $event
  }
}
