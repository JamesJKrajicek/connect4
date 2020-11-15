# connect4
The classic game Connect4 written in JS. This game serves as my submission for the Javascript project for EECS 368.
* Citations
   *  This line of code, which clears any elements contained within the table from the screen before redrawing an updated board, is credited to @dprebyl from Project 1 of our EECS448 project.
      ```javascript
        Board.prototype.renderBoard = function (game, win_state) {
         ///...
          while (board.firstChild) board.removeChild(board.firstChild);
        ///...
       }
      ```
