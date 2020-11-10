/**
 * @class
 * @description Controls the actual execution of the game. When a player makes a move Gameplay validates it before adding it as an element of the board class.
 * Gameplay also checks for a winner and if one if found terminates the game.
 */

function Gameplay ()
{
    this.rows = 6; //How many rows the board has.
    this.cols = 7; //How many columns the board has.
    have_winner = false;
}

/**
 * @description Main function for primary gameplay.
 */
Gameplay.prototype.run = function ()
{
    let play_board = new Board(this.rows, this.cols);
    play_board.renderBoard();
    while (!have_winner)
    {
        //Do stuff
        have_winner = true;
    }
}