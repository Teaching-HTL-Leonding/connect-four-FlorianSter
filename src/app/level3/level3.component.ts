import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

export interface BoardCell {
  /**
   * Player (X or O) occupying the cell, empty string if the cell is empty.
   */
  playerName: string;

  /**
   * CSS class of the player occupying the cell, empty string if the cell is empty.
   */
  class: string;
}


@Component({
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})
export class Level3Component extends Level2Component{
  // TODO: Complete this class by adding the appropriate code.
  // Try to avoid copying the code from level 2. Find a different solution
  // for reusing the existing logic.
  constructor() {
    super();
  }


  /**
   * Get a two-dimensional array representing the board's content.
   */
   public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 4; row++) {
      result.push([]);
      for (let col = 0; col < 4; col++) {
        result[row][col] = {
          playerName: this.gameField[row][col].toString(),
          class: this.getStyle(row, col),
        };
      }
    }

    return result;
  }
}
