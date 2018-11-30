var stdin = process.openStdin();

var board = [' ',' ',' ',
             ' ',' ',' ',
             ' ',' ',' ' ];

function displeyBoard(board){ 
    
    console.log('+---+---+---+' + "\n" +
                 '| ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + ' |' + "\n" +
                 '+---+---+---+' + "\n" +
                 '| ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + ' |' + "\n" +
                 '+---+---+---+' + "\n" +
                 '| ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + ' |' + "\n" +
                 '+---+---+---+')
};

var winCombinations = [[0,1,2], 
                      [3,4,5], 
                      [6,7,8], 
                      [0,3,6],
                      [1,4,7], 
                      [2,5,8], 
                      [0,4,8], 
                      [2,4,6]];

var players = [];

//Rules of the game
//Check if move is valid
function isMoveValid(board, move){
    newMove = board[move]
    for (let i = 1; i<board.length; i++){
        if (newMove === ' ') {
            return true;
        } else {
            return false;
        }
    }
};


//Update the board
function updateBoard (board, move, player){
    board[move] = player
    displeyBoard(board)
}

//Check if someone won
function isWin (board, player){

    var winCombinationFound = 0
    var combination = []

    for (let i = 0; i < winCombinations.length; i++){
        combination = winCombinations[i]

        for (let j = 0; j < combination.length; j++){
                if (board[combination[j]] === player) {
                    winCombinationFound++
                }
            } 

                if (winCombinationFound === 3) {
                    return true
                }
                winCombinationFound = 0
    }
    return false 
}


//Check if board is full
function ifBoardFull(board) {
    for (let i = 1; i<board.length; i++){
        if (board[i] === ' ') {
            return false;
        } else {
            return true;
        }
    }
}


var question1="Pick which one do you want to play: `X` or `O`?";


console.log(question1);

stdin.addListener("data", function(d) {
    
    D = d.toString().trim().toUpperCase();

    if( D !== ""){
        players.push(D);
    }

    if(players[0] == 'X'){
        players.push('O')
    } else {
        players.push('X')
        console.log(players)
    }

    if(players.length == 0){
        console.log(question1);
        return;
    }
    
    if(players.length > 1){
        console.log(`Player1 is ${players[0]} and computer ${players[1]}`);
        console.log('Pick the place on board from 0 to 8');
        updateBoard(board, D, players[0])
        let isWinExist = false;
        isWinExist = isWin (board, players[0])
        if (isWinExist) {
            console.log(`The winner is ${players[0]}`)
        }
        return;
    }

});