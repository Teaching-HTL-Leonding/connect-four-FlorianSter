import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';


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
    this.reset();
  }

  public override reset(): void {
      super.reset();
      this.gameField = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
  }

  protected override getWinnerIndex(): number {
    //Horizontal
    for (let i = 0; i < this.gameField.length; i++) {
      for (let j = 0; j < this.gameField[i].length - 3; j++) {
        if (
          this.gameField[i][j] !== 0 &&
          this.gameField[i][j] === this.gameField[i][j + 1] &&
          this.gameField[i][j] === this.gameField[i][j + 2] &&
          this.gameField[i][j] === this.gameField[i][j + 3]
        ) {
          return this.gameField[i][j];
        }
      }
    }

    //Vertical
    for (let i = 0; i < this.gameField.length - 3; i++) {
      for (let j = 0; j < this.gameField[i].length; j++) {
        if (
          this.gameField[i][j] !== 0 &&
          this.gameField[i][j] === this.gameField[i + 1][j] &&
          this.gameField[i][j] === this.gameField[i + 2][j] &&
          this.gameField[i][j] === this.gameField[i + 3][j]
        ) {
          return this.gameField[i][j];
        }
      }
    }


    //Diagonal <--
    for (let i = 0; i < this.gameField.length - 3; i++) {
      console.log(this.gameField)
      for (let j = 0; j < this.gameField[i].length - 3; j++) {
        if (
          this.gameField[i][j] !== 0 &&
          this.gameField[i][j] === this.gameField[i + 1][j + 1] &&
          this.gameField[i][j] === this.gameField[i + 2][j + 2] &&
          this.gameField[i][j] === this.gameField[i + 3][j + 3]
        ) {
          return this.gameField[i][j];
        }
      }
    }

    // Diagonal -->
    for (let i = 0; i < this.gameField.length - 3; i++) {
      for (let j = 3; j < this.gameField[i].length; j++) {
        if (
          this.gameField[i][j] !== 0 &&
          this.gameField[i][j] === this.gameField[i + 1][j - 1] &&
          this.gameField[i][j] === this.gameField[i + 2][j - 2] &&
          this.gameField[i][j] === this.gameField[i + 3][j - 3]
        ) {
          return this.gameField[i][j];
        }
      }
    }

    return 0;
  }


}
