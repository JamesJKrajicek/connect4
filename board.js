/**
 * @class
 */
//0 is empty, 1 is a p1 occupied cell, 2 is a p2 occupied cell

function Board(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.play_pieces_arr = ["", "p1", "p2"]; /*The different styles we can apply to the table cells 
    to graphically represent an empty cell, a cell controlled by player 1, or a cell contained by player 2 respectively.*/
    this.board_arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        this.board_arr[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            this.board_arr[i][j] = 0; //Fills the array with blanks.
        }
    }
}

Board.prototype.renderBoard = function (game, win_state) {
    let board = document.getElementById("game_board");
    while (board.firstChild) board.removeChild(board.firstChild); // Clear table. Credit: Drake Prebyl
    let tr = document.createElement("tr");
    for (let i = 0; i < this.rows; i++) {
        let tr = document.createElement("tr");
        board.appendChild(tr);
        for (let j = 0; j < this.cols; j++) {
            let td = document.createElement("td");
            td.className = this.validPlayPiece(this.board_arr[i][j]);
            if (!win_state) //If the game is ongoing then add EventListners to the board's elements. 
            {
                td.addEventListener("click", e => game.click(i, j));
            }
            else
            {/* If the game is finished then leave out the event listeners. This effectively freezes the board's state.*/}
            board.appendChild(td);
        }
    }
}

Board.prototype.validPlayPiece = function (input)
{
    if (input<0 || input>2)
    {
        return 0;
    }
    else
    {
        return (this.play_pieces_arr[input]);
    }
}

Board.prototype.isSpaceInsideBoard = function (row, col)
{
    if (row >= this.rows || row<0 || col >=this.col || col<0) //Is the request location outside the board?
    {
        return false; //If so return false.
    }
    else //Otherwise, return true.
    {
        return true;
    }
}

Board.prototype.isSpaceOpen = function (row, col)
{
    if (this.isSpaceInsideBoard(row,col)) //Is the request location inside the board?
    {
         if (this.board_arr[row][col] == 0) //If the space being checked contains a 0 (the empty indicator) then the space is open.
        {
            return true;
        }
    }
    return false;// Return false if the request location was outside the board OR the space being checked wasn't open.
}

Board.prototype.isThereAPlayPieceUnderMe = function (row, col) //Returns false if the coordinates are off the board's valid game space. True otherwise.
{
    if (!this.isSpaceInsideBoard(row+1,col)) //Is the spot below the position given by row and col outside the board?
    {
        return false;
    }
    else if (this.board_arr[(row+1)][col] !== 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

Board.prototype.lookup = function (row, col) //Returns false if the coordinates are off the board's valid game space. True otherwise.
{
    if (this.isSpaceInsideBoard(row, col)) //Is the spot below the position given by row and col outside the board?
    {
        return (this.board_arr[row][col]);
    }
    else
    {
        return (-1);
    }
}



Board.prototype.addToBoard = function (row, col, player)
{
    if (player)
    {
        this.board_arr[row][col] = 1;
    }
    else
    {
        this.board_arr[row][col] = 2;
    }

}