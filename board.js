/**
 * @class
 */
//0 is empty, 1 is a p1 occupied cell, 2 is a p2 occupied cell

function Board(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.play_pieces_arr = ["", "p1", "p2"]; //The different styles we can apply to the table cells.
    this.board_arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        this.board_arr[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            this.board_arr[i][j] = 0; //Fills the array with blanks.
        }
    }
}

/*Board.prototype.run = function () //Delete after confirming renderboard works correctly.
{
    this.renderBoard();
    document.getElementById("game_board").addEventListener("click", e => {

        ;
    })
}
*/
Board.prototype.renderBoard = function () {
    let board = document.getElementById("game_board")
    let tr = document.createElement("tr");
    for (let i = 0; i < this.rows; i++) {
        let tr = document.createElement("tr");
        board.appendChild(tr);
        for (let j = 0; j < this.cols; j++) {
            let td = document.createElement("td");
            td.className = this.validPlayPiece(this.board_arr[i][j]);
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


