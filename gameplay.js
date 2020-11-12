/**
 * @class
 * @description Controls the actual execution of the game. When a player makes a move Gameplay validates it before adding it as an element of the board class.
 * Gameplay also checks for a winner and if one if found terminates the game.
 */

function Gameplay ()
{
    board_rows = 6; //How many rows the board has.
    board_cols = 7; //How many columns the board has.
    have_winner = false;
    player1_turn = true;
    this.play_board = new Board(board_rows, board_cols);
}

/**
 * @description Main function for primary gameplay.
 */
Gameplay.prototype.run = function ()
{
    this.play_board.renderBoard(this);
    this.msg(1);
}


Gameplay.prototype.click = function (cell_row, cell_col)
{
    if (this.isItAValidMove(cell_row, cell_col))
    {
        this.addToBoard(cell_row, cell_col);
        this.switchPlayer();
        this.checkForWin();
        this.play_board.renderBoard(this);
        if (have_winner)
        {
            //Output "We won!" message.
        }
        else
        {
            this.msg(1);
        }
    }
    else
    {
        this.msg(2);
    }
}

Gameplay.prototype.msg = function (msg_code)
{
    if (msg_code = 1) //Current Player's Turn Notification
    {
        document.getElementById("notifications").innerText = this.playersName() +"'s Turn";
    }
    else if (msg_code = 2)
    {
        document.getElementById("notifications").innerText = "Invalid Move: "+this.playersName() +"'s Turn";
    }
    else
    {
        //Do Nothing
    }
}

Gameplay.prototype.playersName = function ()
{
    if (player1_turn)
    {
        return "Player 1";
    }
    else
    {
        return "Player 2";
    }
}

Gameplay.prototype.switchPlayer = function ()
{
    player1_turn = !player1_turn;
}

Gameplay.prototype.isItAValidMove = function (row, col)
{
    //Check whether the new piece is either touching the bottom of the board or is on top of another piece (no matter if it's the other player's).
    if (play_board.isSpaceOpen(row, col) && (row == board_cols || this.play_board.isThereAPlayPieceUnderMe(row, col)))
    {
        return true;
    }
    else
    {
        return false;
    }
}

Gameplay.prototype.addToBoard = function (row, col)
{

}

Gameplay.prototype.checkForWin = function ()
{
    return false; //Temporary.
} 