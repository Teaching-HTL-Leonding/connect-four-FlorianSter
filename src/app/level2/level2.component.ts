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
    console.log(`Coin dropped in column ${colIx}`);
    const rowIx = this.getNextRow(colIx);
    if(rowIx == -1){
      return;
    }
    this.gameField[rowIx][colIx] = this.currentPlayerIndex;
    this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
    if(this.winner == 0){
      this.winner = this.checkWinner();
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

   private checkHorizontal(): number{
    for(let i = 0; i < this.gameField.length; i++){
      let counter = 0;
      for (let j = 0; j < this.gameField[i].length; j++) {
        if(this.gameField[i][0] === this.gameField[i][j]){
          counter++;
        }
      }
      if(counter === this.gameField[i].length && this.gameField[i][0] != 0){
        return this.gameField[i][0];
      }
    }
    return 0;
   }

   private checkVertical(): number{
    for (let j = 0; j < this.gameField[0].length; j++){
      let counter = 0;
      for(let i = 0;  i < this.gameField.length; i++){
        if(this.gameField[0][j] === this.gameField[i][j])
        {
          counter++;
        }
      }
      if(counter == this.gameField.length && this.gameField[0][j] != 0){
        return this.gameField[0][j];
      }
    }
    return 0;
   }
   private checkDiagonal1(): number{
    let counter = 0;
    for (let index = 0; index < this.gameField.length; index++) {
      if(this.gameField[index][index] == this.gameField[0][0]){
        counter++;
      }
    }
    if(counter == 4 && this.gameField[0][0] != 0){
      return this.gameField[0][0];
    }
    return 0;
   }
   private checkDiagonal2(): number{
    let i = 0;
    let counter =0;
    for(let j = 3; j >= 0; j--){
      if(this.gameField[i][j] == this.gameField[3][0]){
        counter++;
      }
      i++;
    }
      if(counter == 4 && this.gameField[3][0] != 0){
         return this.gameField[3][0];
      }
      return 0;
   }

   private checkWinner(): number{
    const w1 = this.checkHorizontal();
    const w2 = this.checkVertical();
    const w3 = this.checkDiagonal1();
    const w4 = this.checkDiagonal2();
    if(w1 != 0){
      return w1;
    }
    if(w2 != 0){
      return w2;
    }
    if(w3 != 0){
      return w3;
    }
    return w4;
   }

  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.
}
