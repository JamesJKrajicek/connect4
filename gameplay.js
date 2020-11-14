/**
 * @class
 * @description Controls the actual execution of the game. When a player makes a move Gameplay validates it before adding it as an element of the board class.
 * Gameplay also checks for a winner and if one if found terminates the game.
 */

function Gameplay ()
{
    board_rows = 6; //How many rows the board has.
    board_cols = 7; //How many columns the board has.
    winning_amt = 4; //The number of pieces belonging to a single player that must touch in order to win the game. 
    have_winner = false;
    player1_turn = true;
    this.play_board = new Board(board_rows, board_cols);
}

/**
 * @description Main function for primary gameplay.
 */
Gameplay.prototype.run = function ()
{
    this.play_board.renderBoard(this, have_winner);
    this.msg(1);
}


Gameplay.prototype.click = function (cell_row, cell_col)
{
    //console.log ("Row: "+cell_row +", Column: "+cell_col);
    if (this.isItAValidMove(cell_row, cell_col))
    {
        this.play_board.addToBoard(cell_row, cell_col, player1_turn);
        if (this.checkForWin(cell_row, cell_col))
        {
            this.msg(3);
        }
        else
        {
            this.switchPlayer();
            this.msg(1);
        }
        this.play_board.renderBoard(this, have_winner);
    }
    else
    {
        this.msg(2);
    }
}

Gameplay.prototype.msg = function (msg_code)
{
    if (msg_code == 1) //Current Player's Turn Notification
    {
        document.getElementById("notifications").innerText = this.playersName() +"'s Turn";
    }
    else if (msg_code == 2)
    {
        document.getElementById("notifications").innerText = "Invalid Move: "+this.playersName() +"'s Turn";
    }
    else if (msg_code == 3)
    {
        document.getElementById("notifications").innerText = this.playersName() +" Wins!";
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
    //console.log(this.play_board.isSpaceOpen(row, col),'\n',row == board_cols, '\n', this.play_board.isThereAPlayPieceUnderMe(row, col));

    //Check whether the new piece is either touching the bottom of the board or is on top of another piece (no matter if it's the other player's).
    if (this.play_board.isSpaceOpen(row, col) && (row == (board_rows-1) || this.play_board.isThereAPlayPieceUnderMe(row, col)))
    {
        return true;
    }
    else
    {
        return false;
    }
}

Gameplay.prototype.checkForWin = function (row, col)
{//Check up, up-left diag, left, down-left diag, down, down-right diag, right, up-right diag.
    //Recursive.
    //let success = false;
    let player_board_val;
    if (player1_turn)
    {
        player_board_val = 1;
    }
    else
    {
        player_board_val = 2;
    }
    //recWinCheck (row,col,1,1,player_board_val,1)
    if (this.recWinCheck (row,col,-1,0,player_board_val,1))
    {
        have_winner=true;
        return true;
    }
    else if (this.recWinCheck (row,col,-1,-1,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else if (this.recWinCheck (row,col,0,-1,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else if (this.recWinCheck (row,col,1,-1,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else if (this.recWinCheck (row,col,1,0,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else if (this.recWinCheck (row,col,1,1,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else if (this.recWinCheck (row,col,0,1,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else if (this.recWinCheck (row,col,-1,1,player_board_val,1))
    {
        have_winner = true;
        return true;
    }
    else
    {
        return false;
    }
}

Gameplay.prototype.recWinCheck = function (row, col, row_inc, col_inc, c_player, in_a_row)
{
    in_a_row = (in_a_row + 1);
    row = (row + row_inc);//Increment the row to be looked at. This is done first to avoid looking at the originating cell.
    col = (col + col_inc);//Increment the column to be looked at.
    if (!this.play_board.isSpaceInsideBoard (row,col) || (this.play_board.lookup(row, col) != c_player))
    {
        return false;
    }
    else if (in_a_row >= 4)//When there are three pieces in a row (plus the piece that was just put down) belonging to the same player then that player's won. Return true.
    {
        return true;
    }
    else
    {
        return (this.recWinCheck(row, col, row_inc, col_inc, c_player, in_a_row));
    }
}