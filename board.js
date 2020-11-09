/**
 * @class
 */

 class Board
 {

    constructor (rows, cols)
    {
        this.rows = rows;
        this.cols = cols;
        this.board_arr = new Array(rows);
        for (let i=0; i<rows; i++)
        {
            this.board_arr[i] = new Array (cols);
            for (let j=0; j<cols;j++)
            {
                this.board_arr[i][j] = ""; //Fills the array with blanks.
            }
        }
        this.renderBoard();
        document.getElementById("game_board").addEventListener("click", e => {

            ;})
    }

    renderBoard ()
    {
        let board = document.getElementById("game_board")
        let tr = document.createElement("tr");
        for (let i=0; i<this.rows; i++)
        {
            let tr = document.createElement("tr");
            board.appendChild(tr);
            for (let j=0; j<this.cols;j++)
            {
                let td = document.createElement("td");
                td.className = this.board_arr[i][j]; //If Player 1 has a piece placed then the class of the cell is set to p1 else it is set to p2.
                board.appendChild(td);
            }
        }
    }



 }