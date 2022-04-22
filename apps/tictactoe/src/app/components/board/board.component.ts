import {Component, Input, OnInit} from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'angular-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  squares: string[] = [];
  xIsNext: boolean = true;
  winner: string = '';
  @Input() save = '';

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  ngOnChanges(): void {
    //this.newGame();
  }

  newGame() {
    if (this.save === '') {
      this.squares = Array(9).fill('');
      this.xIsNext = true;
      this.winner = '';

      return;
    }

    [...this.save].forEach((char, index) => {
      switch (char) {
        default:
          this.squares[index] = '';
          break;
        case '1':
          this.squares[index] = 'X';
          break;
        case '2':
          this.squares[index] = 'O';
          break;
      }
    });
    //check who is current player
    this.xIsNext = !!([...this.save].filter(char => char === '').length % 2);
    this.winner = this.calculateWinner();
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if(!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    if (this.winner !== '') {
      return this.winner;
    }

    const lines = [
      [0, 1, 2], //first line
      [3, 4, 5], //second line
      [6, 7, 8], //third line
      [0, 3, 6], //first column
      [1, 4, 7], //second column
      [2, 5, 8], //third column
      [0, 4, 8], //first diagonal
      [2, 4, 6], // second diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //todo
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      } else {
        if (!this.squares.includes("")) {
          return "-"
        }
      }
    }
    return '';
  }
}
