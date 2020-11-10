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
    document.getElementById("game_board").addEventListener("click", e => {
        
        console.log("hi");
        ;})
    while (!have_winner) //Gameplay loop
    {//Do Stuff
        this.play_board.renderBoard();
        document.getElementById("notifications").innerText = this.playersName() +"'s Turn";

        have_winner = true;
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

Gameplay.prototype.isValidMove = function (row, col)
{

}

Gameplay.prototype.addToBoard = function (row, col)
{

}

Gameplay.prototype.checkForWin = function ()
{

} 