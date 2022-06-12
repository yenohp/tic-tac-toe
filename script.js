const newGameBttn = document.querySelector('#newGameBttn');
const closeBttn = document.querySelector('.closeBttn');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

const toggleModal = () => {
    modal.classList.toggle('showModal');
}
const windowOnClick = (event) => {
    if (event.target === modal) {
        toggleModal();
    }
}
const gameBoard = (() => {
    // Create a two dimensional array
    let board = new Array(3);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(3);
    }
    return { board };
})();

const updateBoard = (board, inputPos) => {
    // Identify input location based on array [[0:0,0:1,0:2],[1:0,1:1,1:2],[2:0,2:1,2:2]]
    // Loop through board and place input into array position
    // Return new board
}
const gameOver = (() => {
    // Create players based on modal inputs
    // Allow for input clicks on tic-tac-toe
    // Game logic - legal move is only able to click on non used space
    // If all spaces are full and no winning move has been made, tie
    // Else if three spaces are filled that align (maybe index wise?), win
    // On gameOver, prompt player with rematch or reset
})();
const displayController = (() => {
    let board = gameBoard;
    // New Game button eventlistener creates modal for player creation
    newGameBttn.addEventListener('click', toggleModal);
    window.addEventListener("click", windowOnClick);
    closeBttn.addEventListener('click', toggleModal);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        // Turn formData into object
        updateDisplay(formData);
    })
    // displays player names/computer
    // displays game event (victory/tie)
    // changes score
    // updates on each input
})();

const player = (name, score) => {
    // display name -- and score?
    // increment score
}

