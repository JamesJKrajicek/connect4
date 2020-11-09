/**
 * @class
 */

 class Board
 {

    constructor (rows, cols)
    {
        this.board_arr = new Array(rows);
        for (let i=0; i<rows; i++)
        {
            this.board_arr[i] = new Array (cols);
            for (let j=0; j<cols;j++)
            {
                this.board_arr[i][j];
            }
        }
        this.renderBoard();
        document.getElementById("game_board").addEventListener("click", e => {

        };)
    }

    renderBoard ()
    {
        
    }



 }