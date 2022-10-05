import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public currentPlayerIndex = 1;
  public winner: number = 0;
  public gameField!: number[][];


  public drop(colIx: number) {
    if (!!this.winner) {
      return;
    }

    console.log(`Coin dropped in column ${colIx}`);
    console.log(this.gameField.length)

    for (let i = this.gameField.length - 1; i >= 0; i--) {
      if (!this.gameField[i][colIx]) {
        this.gameField[i][colIx] = this.currentPlayerIndex;
        this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
        this.winner = this.getWinnerIndex()
        return;
      }
    }
  }

  constructor(){
    this.reset();
  }

  public reset(): void{
    this.gameField = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    this.winner = 0;
  }

  private getNextRow(column: number): number{
    for(let i = this.gameField.length - 1; i >= 0;i--){
      if (this.gameField[i][column] === 0){
          return i;
      }
    }
    return -1;
  }

  public getStyle(row:number, col:number): string{
    if (this.gameField[row][col] !== 0){
        return `occupied-${this.gameField[row][col]}`;
    }
      return '';
   }

   protected getWinnerIndex(): number {
    for (let i = 0; i < this.gameField.length; i++) {
      if (this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][1] === this.gameField[i][2] && this.gameField[i][2] === this.gameField[i][3]) {
        return this.gameField[i][0];
      }

      if (this.gameField[0][i] === this.gameField[1][i] && this.gameField[1][i] === this.gameField[2][i] && this.gameField[2][i] === this.gameField[3][i]) {
        return this.gameField[0][i];
      }
    }

    if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][2] && this.gameField[2][2] === this.gameField[3][3]) {
      return this.gameField[0][0]
    }

    if (this.gameField[0][3] === this.gameField[1][2] && this.gameField[1][2] === this.gameField[2][1] && this.gameField[2][1] === this.gameField[3][0]) {
      return this.gameField[0][3]
    }

    return 0
  }




  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.
}
